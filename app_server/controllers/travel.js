var fs = require('fs'); 
var trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 
'utf8'));

/* GEt Travel view */
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
  travel
}