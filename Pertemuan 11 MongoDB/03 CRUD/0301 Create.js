const db = require("./Database");

const Member = require("../models/Member");

var member_to_insert = new Member({
    name: "Space The Final Frontier",
    email: "these-are@the-voyages.com",
    credit: 1701000
});

member_to_insert.save((err, product) => {
    if (err) {
        console.log(err);
    }
    console.log(JSON.stringify(product));
});