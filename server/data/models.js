const db = require("./db");

module.exports = {
    Users: require("./entities/user"),
    Wares: require("./entities/ware"),
    Deals: require("./entities/deal")
};