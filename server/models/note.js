var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LineSchema = Schema({
  text: String,
  checked: Boolean,
});

var NoteSchema = mongoose.Schema({
  title: String,
  lines: [LineSchema],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

mongoose.model('Note', NoteSchema);