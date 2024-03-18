const express = require('express');
const model = require('../schema/TrainSchema');
const router = express.Router();
const db =require('../app.js')
const mongoose=require('mongoose')

//get trains with destination and arrival
router.get('/getTrains', async (req, res) => {
    const data = new model({
        departurePlace: req.body.departurePlace,
        arrivalPlace: req.body.arrivalPlace
    })

    try {
        const departurePlace = data.departurePlace;
        const arrivalPlace = data.arrivalPlace;

        const Train = mongoose.model("Train Information");
        const trains = await Train.find({departurePlace:departurePlace,arrivalPlace:arrivalPlace}).exec();
  
        res.status(200).json(trains)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
})

//Get all Trains Method
router.get('/getAllTrains', async (req, res) => {
    try {
        const Train = mongoose.model("Train Information");
        const trains = await Train.find().exec();
        res.json(trains);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/addTrain', async(req, res) => {
    const data = new model ({
     name : req.body.name,
     trainNo :  req.body.trainNo,
     departureTime :  req.body.departureTime,
     departurePlace :  req.body.departurePlace,    
     arrivalTime:  req.body.arrivalTime,
     arrivalPlace :  req.body.arrivalPlace,
     noOfSeatsAvailable: req.body.noOfSeatsAvailable
        })
     
    try { 
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Book ticket by train id and no of tickets
router.patch('/book/:id/:noOfTickets', async (req, res) => {
    try {
        const trainNo = req.params.id;
        const noOfTickets = req.params.noOfTickets;
        const availableSeats = await model.findById(trainNo);

        if (availableSeats.noOfSeatsAvailable >= noOfTickets) {
            //allow booking
            const updatedData = { noOfSeatsAvailable: (availableSeats.noOfSeatsAvailable - noOfTickets) };
            const options = { new: true };
            const result = await model.findByIdAndUpdate(trainNo, updatedData, options)
            res.status(200).send(result);
        } else {
            //do not allow booking
            return res.status(409).json({ message: "Seats Unavailable!!" });
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//cancel ticket by train id
router.patch('/cancel/:id/:noOfTickets', async (req, res) => {
    try {
        const trainNo = req.params.id;
        const noOfTickets = req.params.noOfTickets;
        const availableSeats = await model.findById(trainNo);
        const newSeatCount = parseInt(availableSeats.noOfSeatsAvailable) + parseInt(noOfTickets);

        const updatedData = { noOfSeatsAvailable: newSeatCount };
        const options = { new: true };
        const result = await model.findByIdAndUpdate(trainNo, updatedData, options)
        res.status(200).send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;