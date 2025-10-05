const express = require('express');
const router = express.Router();


const tripController = require("../controllers/trips");

router.get('/trips', tripController.tripsList);

router.get('/trips/:tripCode', tripController.tripsFindByCode);
module.exports = router;
