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
    createWare: async function(ware) {
        return (await post("/api/wares/create", ware)).json();
    },
    findWareById: async function (wareId) {
        return (await get(`/api/wares/${wareId}`)).json();
    },
    /*
     * deal is {
     *      ware: ObjectId,
     *      buyerSlotProposal: [{start: Date, end: Date}]
     * }
     */
    createDeal: async function (deal) {
        return (await post("/api/deals/create", deal)).json();
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
    search: async function(text) {
        return (await get(`/api/search?q=${text}`)).json();
    },
    buyerConfirm: async function(dealId) {
        return (await post(`/api/deals/${dealId}/buyer-confirm`)).json();
    },
    sellerConfirm: async function(dealId) {
        return (await post(`/api/deals/${dealId}/seller-confirm`)).json();
    },
    getImage: async function(wareId) {
        return (await post(`"/wares/${wareId}/image"`)).json();
    },
}