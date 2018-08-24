const express = require("express");
const router = express.Router();
const passport = require("passport");
const {Users, Deals, Wares} = require("../data/models");

const auth = passport.authenticate("local");

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


router.post("/users/login", auth, (req, res) => {
    req.login(req.body, () => {
        res.sendStatus(200);
    });
});

router.get("/users/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
});

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

router.post("/wares/create", async (req, res) => {
    const {user, body} = req;
    const {name, price, description} = body;
    const tags = JSON.parse(body.tags);
    const slots = JSON.parse(body.slots);
    await Wares.create({
        seller: user._id,
        name,
        tags,
        price,
        description,
        slots
    });
});

router.post("/deals/new", async (req, res) => {
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

router.get("/search", async (req, res) => {
    const q = `.*${req.query.q}.*`;

    res.json(await Wares.find({$or: [
        { "name": { $regex : q } },
        { "description": { $regex : q } },
        { "tags": { $elemMatch: { $regex: q } } }
    ]}));
});

//TODO do something when both buyer and seller confirms

function consolidateDeal(deal) {
    const buy = deal.buyerSlotProposal;
    const sell = deal.ware.slots;
    sell.sort((x,y) => +Date(x.start) - +Date(y.start));
    buy.sort((x,y) => +Date(x.start) - +Date(y.start));
    for (const slot in buy) {
        for (const match in sell) {

            if (match.start >= slot.start && match.end <= slot.end) {

            }
        }
    }
}

router.post("/deals/:dealId/buyer-confirm", async (req, res) => {
    const deal = await Deals.findById(req.param.dealId);
    if (req.user._id !== deal.buyer) {
        res.status(400).send("Not buyer!");
        return;
    }
    deal.buyerConfirmation = true;
    await deal.save();
});

router.post("/deals/:dealId/seller-confirm", async (req, res) => {
    const deal = await Deals.findById(req.param.dealId);
    console.log(deal.ware.seller);
    if (req.user._id !== deal.ware.seller) {
        res.status(400).send("Not seller!");
        return;
    }
    deal.sellerConfirmation = true;
    await deal.save();
});




router.get("/", async (req, res, next) => {
    res.send("respond with a resource");
});

module.exports = router;
