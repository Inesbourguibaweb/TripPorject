const mongoose = require("mongoose")

const TripSchema = new mongoose.Schema({
    TripName: {
        type: String,
        required: [true, "Trip Name is required"], 
        minLength: [3, "Min of Trip Name length must be greater than 3"]
    },
    country: {
        type: String,
        required: [true, "Country is required"], 
        minLength: [3, "Min of country length must be greater than 3"]
    },
    urlImage: {
        type: String,
        required: [true, "Must be a Valid URL"],
    },
    cost: {
        type: Number,
        required: [true, "Treasure is required"],
        min: [1, "minimum of Price must be greater than 1"]
    },
    description: {
        type: String,
        required: [true, "Treasure is required"],
        minLength: [3, "Min Trip Catch Phraser length must be greater than 3"]
    },
    addedBy: {
        type: String,
    },
    likedBy: {
        type: Array
    }
}, { timestamps: true })


const Trip = mongoose.model("Trip", TripSchema)
module.exports = Trip;