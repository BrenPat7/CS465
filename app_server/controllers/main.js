/*GET HOMEPAGE */
const index = (req, res) => {
  res.render('index', { title: 'Travlr Gateways' });
};

module.exports = {
  index
}