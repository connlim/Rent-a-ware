const mongoose = require("../db");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    startTime: Date,
    endTime: Date
});

module.exports = slotSchema;
