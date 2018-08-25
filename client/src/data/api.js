import {get, post} from './rest';

export default {
    /*
     * ware is: {
     *      name: String,
     *      tags: [String],
     *      seller: { type: Schema.Types.ObjectId, ref: "User" },
     *      location: String,
     *      price: Number,
     *      description: String,
     *      slots: [{start: Date, end: Date}]
     * }
     */
    createWare: async (ware) => {
        await post("/api/wares/create", ware);
    },

}