const TripController = require("../controllers/trip.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = (app)=>{
    app.get("/api/trips",authenticate, TripController.getAllTrip)
    app.post("/api/trips",authenticate, TripController.createTrip)
    app.get("/api/trips/:id",authenticate, TripController.findOneSingleTrip)
    app.delete("/api/trips/:id",authenticate, TripController.deleteTrip) 
    app.put("/api/trips/:id",authenticate, TripController.updateOneTrip)
}