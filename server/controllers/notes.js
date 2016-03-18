var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
  index: (req, res) => {
    Note.find( {}, 
      (err, results) => res.json({ data: results })
    );
  },
  create: (req, res) => {
    var note = new Note(req.body);
    note.save( 
      () => res.end()
    );
  },
  delete: (req, res) => {
    console.log(req.params);
    Note.findById(req.params.id, 
      (err, result) => {
        result.remove(
          () => res.end()
        );
      }
    );
  }
}