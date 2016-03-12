var notes = require('./../server/controllers/notes');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.route('/notes')
  .get(function (req, res) {
    notes.index(req, res);
  })
}