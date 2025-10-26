const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Model
            .find({})
            .exec();
        
        return res
            .status(200)
            .json(trips);
            
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model
            .findOne({ 'code': req.params.tripCode })
            .exec();

        if (!trip) {
            return res
                .status(404)
                .json({ "message": "Trip not found" });
        } else {
            return res
                .status(200)
                .json(trip);
        }
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        const savedTrip = await newTrip.save();
        
        return res
            .status(201)
            .json(savedTrip);

    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

const tripsUpdateTrip = async (req, res) => {
    try {
        const updatedTrip = await Model
            .findOneAndUpdate(
                { 'code': req.params.tripCode },
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                { new: true }
            )
            .exec();

        if (!updatedTrip) {
            return res
                .status(44)
                .json({ "message": "Trip not found" });
        } else {
            return res
                .status(200)
                .json(updatedTrip);
        }
    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};