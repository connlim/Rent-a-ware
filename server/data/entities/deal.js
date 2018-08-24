const mongoose = require("../db");
const Schema = mongoose.Schema;
const slotSchema = require("./slot");

const messageSchema = new Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: "User" },
    text: String,
    timestamp: Date
});

const dealSchema = new Schema({
    ware: { type: Schema.Types.ObjectId, ref: "Ware" },
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    sellerConfirmation: Boolean,
    buyerConfirmation: Boolean,
    messages: [messageSchema],
    buyerSlotProposal: [slotSchema]
});

module.exports = mongoose.model("Deal", dealSchema);
