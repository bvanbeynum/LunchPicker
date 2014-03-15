var mongoose = require("mongoose");

module.exports = mongoose.model("Restaurant", {
	name: String,
	rating: Number,
	cuisine: String,
	visits: [Date],
	lastVisit: Date
});