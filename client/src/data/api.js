import {get, post} from './rest';

export default {
    /*
     * ware is: {
     *      _id: ObjectId,
     *      name: String,
     *      tags: [String],
     *      seller: { type: ObjectId, ref: "User" },
     *      location: String,
     *      price: Number,
     *      description: String,
     *      slots: [{start: Date, end: Date}]
     * }
     */
    createWare: async (ware) => {
        return await post("/api/wares/create", ware);
    },
    findWareById: async (wareId) => {
        return await get(`/api/wares/${wareId}`);
    },
    /*
     * deal is {
     *      ware: ObjectId,
     *      buyerSlotProposal: [{start: Date, end: Date}]
     * }
     */
    createDeal: async (deal) => {
        return await post("api/deals/create", deal);
    },
    /*
     * Returns [{
     *      _id: ObjectId,
     *      name: String,
     *      tags: [String],
     *      seller: { type: ObjectId, ref: "User" },
     *      location: String,
     *      price: Number,
     *      description: String,
     *      slots: [{start: Date, end: Date}]
     * }]
     */
    search: async (text) => {
        return await get(`api/search?q=${text}`);
    },
    buyerConfirm: async (dealId) => {
        await post(`api/deals/${dealId}/buyer-confirm`);
    },
    sellerConfirm: async (dealId) => {
        await post(`api/deals/${dealId}/seller-confirm`);
    },
}