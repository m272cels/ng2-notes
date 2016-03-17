var notes = require('./../server/controllers/notes');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index.html');
  });

  app.route('/notes')
  .get( (req, res) => {
    notes.index(req, res);
  })
  .post( (req, res) => {
    notes.create(req, res);
  })
}