var restaurantDb = require("../../data/modules/restaurant");

module.exports = function (app) {
	// API
	
	// Get all restaurants
	app.get("/api/restaurant/list", function (reqest, response) {
		restaurantDb.find(function (error, restaurants) {
			if (error) {
				response.send(error);
			}
			
			response.json(restaurants);
		});
	});
	
	app.get("/api/restaurant/get", function (request, response) {
		restaurantDb.findById(request.query.id, function(error, restaurant) {
			if (error) {
				response.send(error);
			}
			
			response.json(restaurant);
		})
		response.send("id:" + request.query.id);
	});
	
}