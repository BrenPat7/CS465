const fetch = require('node-fetch');

const tripsEndpoint = 'http://localhost:3000/api/trips';

const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint);
    
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const json = await response.json();

    let message = null;
    let trips = [];

    if (json instanceof Array) {
      trips = json;
      if (!trips.length) {
        message = 'No trips found';
      }
    } else {
      message = 'API lookup error: Unexpected data format.';
    }

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips,
      message: message
    });

  } catch (err) {
    console.error(err); 
    
    res.render('travel', {
        title: 'Travlr Getaways',
        trips: [],
        message: 'Error fetching trips: ' + err.message
    });
  }
};

module.exports = {
  travel,
};