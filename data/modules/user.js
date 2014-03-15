var mongoose = require("mongoose");

module.exports = mongoose.model("User", {
	userName: String,
	password: String,
	firstName: String,
	lastName: String,
	insertDate: { type: Date, default: Date.now },
	updateDate: { type: Date, default: Date.now }
});
