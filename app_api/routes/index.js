const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Changed from express-jwt

const tripController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 2) { // Changed to 2
        console.log('Not enough tokens in Auth Header: ' +
            headers.length);
        return res.sendStatus(401); // Changed to 401
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);

    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);

    // console.log(jwt.decode(token));
    jwt.verify(token, process.env.JWT_SECRET, (err,
        verified) => {
        if (err) {
            console.log('Token Validation Error!');
            return res.status(401).json('Token Validation Error!'); // Fixed sendStatus
        }
        req.auth = verified; // Set the auth paramto the decoded object
        next(); // Moved next() inside the callback
    });
}

router.route('/register')
    .post(authController.register);

router.route('/login')
    .post(authController.login);

router
    .route('/trips')
    .get(tripController.tripsList)
    .post(authenticateJWT, tripController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripController.tripsFindByCode)
    .put(authenticateJWT, tripController.tripsUpdateTrip);

module.exports = router;