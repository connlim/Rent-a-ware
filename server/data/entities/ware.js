const mongoose = require("../db");
const Schema = mongoose.Schema;
const slotSchema = require("./slot");

const wareSchema = new Schema({
    name: String,
    tags: [String],
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    location: String,
    price: Number,
    description: String,
    slots: [slotSchema],
    image: Buffer,
    imageMimeType: String
});

module.exports = mongoose.model("Ware", wareSchema);