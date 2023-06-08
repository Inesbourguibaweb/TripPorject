const Trip=require('../models/trip.model');
const jwt = require("jsonwebtoken");

//Read AllTrip
module.exports.getAllTrip = (request, response) => {
    Trip.find({})
        .then(Trip => {
            console.log(Trip); 
            response.json(Trip);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

// Get One Trip
module.exports.findOneSingleTrip = (req, res) => {
    Trip.findOne({ _id: req.params.id })
        .then(Trip => res.json(Trip))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
    }

//Create a new Trip
module.exports.createTrip = (request, response) => { 
    console.log(request.Token.firstName);  
    Trip.create({...request.body, 
        addedBy:request.Token.firstName, 
        likedBy:request.Token.firstName })        
        .then(Trip => response.json(Trip))
        .catch(err => response.status(400).json(err))
    }

//Update One Trip 
module.exports.updateOneTrip = (req,res)=>{
    Trip.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true })
    .then(updatedTrip=>{
        console.log("UPDATED ✅✅");
        res.json(updatedTrip)
    })
    .catch(err=>{
        console.log("FAILED TO UPDATE ❌❌❌");
        res.json(err)
    })
}
//Delete One Trip 
module.exports.deleteTrip = (request, response) => {
    Trip.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => 
            {console.log(_id);
            response.json(deleteConfirmation);
        }
            )
        .catch(err => response.json(err))
}

//To add like 
module.exports.updateOneTripLike = (req, res) => {
    Trip.findByIdAndUpdate(
      req.params.id,
      { $push: { likedBy: req.Token.firstName} },
      { new: true, runValidators: true }
    )
      .then((updatedTrip) => {
        console.log("UPDATED ✅✅");
        res.json(updatedTrip);
      })
      .catch((err) => {
        console.log("FAILED TO UPDATE ❌❌❌");
        res.json(err);
      });
  };

// to remove a like 
module.exports.updateOneTripUnlike = (req, res) => {
    const TripId = req.params.id;
    const userFirstName = req.Token.firstName; // Assuming you have a middleware that verifies and extracts the user's first name from the request
  
    // Find the Trip by ID
    Trip.findById(TripId)
      .then((Trip) => {
        if (!Trip) {
          return res.status(404).json({ error: 'Trip not found' });
        }
  
        // Remove the user from the Trip's likedBy array
        const updatedLikedBy = Trip.likedBy.filter((user) => user !== userFirstName);
        Trip.likedBy = updatedLikedBy;
  
        // Save the updated Trip
        return Trip.save();
      })
      .then((updatedTrip) => {
        res.json(updatedTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while unfollowing the Trip' });
      });
  };






