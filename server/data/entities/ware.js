const mongoose = require("../db");
const Schema = mongoose.Schema;
const slotSchema = require("./slot");

const wareSchema = new Schema({
    name: String,
    tags: [String],
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    price: Number,
    description: String,
    slots: [slotSchema]
});

module.exports = mongoose.model("Ware", wareSchema);