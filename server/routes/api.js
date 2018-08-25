const express = require("express");
const router = express.Router();
const passport = require("passport");
const {Users, Deals, Wares} = require("../data/models");

const auth = passport.authenticate("local");

//REMEMBER if you are using fetch, use it like this: https://stackoverflow.com/questions/34558264/fetch-api-with-cookie
//authentication is managed using session cookies

/*
 * Post with username, password in body
 */
router.post("/users/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.register(new Users({ username }), password);
    } catch (e) {
        res.status(400).send(e);
        return;
    }
    auth(req, res, () => {
        res.sendStatus(200);
    });
});

/*
 * Post with username, password in body
 */
router.post("/users/login", auth, (req, res) => {
    req.login(req.body, () => {
        res.sendStatus(200);
    });
});

/*
 *Just get
 */
router.get("/users/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
});

/**
 * Get .If logged in, returns user object (200) with fields:
 *      - username,
 *      - wares (list of wares for this person)
 * otherwise return (400) this object {auth: false}
 */
router.get("/users/info/me", (req, res) => {
    if (req.user === undefined) {
        res.status(400).send({ auth: false });
        return;
    } else {
        res.json({
            wares: Wares.find().where("seller").equals(req.user._id),
            username: req.user.username
        });
    }
});

/*
 * Post name, price, location, description (price is number), tags (array of String), slots (array of {start: Date, end: Date})
 */
router.post("/wares/create", async (req, res) => {
    const {user, body} = req;
    const {name, price, description, location} = body;
    const tags = JSON.parse(body.tags);
    const slots = JSON.parse(body.slots);
    await Wares.create({
        seller: user._id,
        name,
        tags,
        price,
        description,
        slots,
        location
    });
});

/*
 * Get. Returns a ware given an id
 */
router.get("/wares/:wareId", async (req, res) => {
    res.json(await Wares.findById(req.param.wareId));
});

/*
 * Post ware (the ware's _id), buyerSlotProposal (array of {start: Date, end: Date})
 */
router.post("/deals/create", async (req, res) => {
    const {user, body} = req;
    const {ware, buyerSlotProposal} = body;
    await Deals.create({
        ware,
        buyer: user._id,
        sellerConfirmation: false,
        buyerConfirmation: false,
        messages: [],
        sellerSlotProposal: JSON.parse(buyerSlotProposal)
    });
});

/*
 * Get with q = search query
 * returns ware object with seller information(username)
 * {
        name,
        tags,
        price,
        description,
        slots,
        seller: {
            username
        }
 * }
 */
router.get("/search", async (req, res) => {
    const q = `.*${req.query.q}.*`;

    res.json(await Wares.find({$or: [
        { "name": { $regex : q } },
        { "description": { $regex : q } },
        { "location": { $regex : q } },
        { "tags": { $elemMatch: { $regex: q } } }
    ]}).populate('seller'));
});


function consolidateDeal(deal) {
    if (!(deal.buyerConfirmation && deal.sellerConfirmation)) return;
    const buy = deal.buyerSlotProposal.map();
    const sell = deal.ware.slots;
    sell.sort((x,y) => +Date(x.start) - +Date(y.start));
    buy.sort((x,y) => +Date(x.start) - +Date(y.start));
    for (let slotIdx = 0; slotIdx < buy.length; slotIdx++) {
        for (let matchIdx = 0; matchIdx < sell.length; matchIdx++) {
            const slot = buy[slotIdx];
            const match = sell[matchIdx];
            if (match.start <= slot.start && match.end >= slot.end) {
                const diff1 = +Date(slot.start) - +Date(match.start);
                const diff2 = +Date(match.end) - +Date(slot.end);
                sell.split(slotIdx, 1);
                if (diff1 !== 0)
                    sell.push({
                        start: new Date(+Date(match.start)),
                        end: new Date(+Date(match.start) + diff1)
                    });
                if (diff2 !== 0)
                    sell.push({
                        start: new Date(+Date(match.end)-diff2),
                        end: new Date(+Date(match.start))
                    });
                break;
            }
        }
    }
    deal.ware.slots = sell;

}

/*
 * Post, make sure dealId is deal._id
 */
router.post("/deals/:dealId/buyer-confirm", async (req, res) => {
    const deal = await Deals.findById(req.param.dealId).populate('ware');
    if (req.user._id !== deal.buyer) {
        res.status(400).send("Not buyer!");
        return;
    }
    deal.buyerConfirmation = true;
    consolidateDeal(deal);

    await deal.save();
});

/*
 * Post, make sure dealId is deal._id
 */
router.post("/deals/:dealId/seller-confirm", async (req, res) => {
    const deal = await Deals.findById(req.param.dealId);
    console.log(deal.ware.seller);
    if (req.user._id !== deal.ware.seller) {
        res.status(400).send("Not seller!");
        return;
    }
    deal.sellerConfirmation = true;
    consolidateDeal(deal);
    await deal.save();
});

//TODO put some chatting system here

module.exports = router;
