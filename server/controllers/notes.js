var mongoose = require('mongoose');
var Note = mongoose.model('Note');
// var Rx = require('rxjs');

module.exports = {
  index: function (req, res) {
    Note.find({}, function (err, results) {
      console.log('notes#index');
      console.log('sending mock data');
      // var results = [{
      //     id: "1a1a",
      //     title: "this is note 1",
      //     lines: [
      //         { text: "this is line 1" },
      //         { text: "this is line 2" }
      //     ]
      // },
      // {
      //   id: "2b2b",
      //   title: "this is note 2",
      //   lines: [
      //       { text: "this is line 1" },
      //       { text: "this is line 2" },
      //       { text: "i hope this is good" }
      //   ]
      // }];
      // console.log(results);
      // console.log(Rx);
      // var obs = Rx.Observable.from(results);
      // console.log(obs);
      // obs.do( thing => console.log(thing) );
      // return res.end();
      // return res.send(Rx.Observable.from(results));
      return res.json(NOTES);
    });
  }
}

var NOTES = [
    {
        id: "1a1a",
        title: "this is note 1",
        lines: [
            { text: "this is line 1" },
            { text: "this is line 2" }
        ]
    },
    {
        id: "2b2b",
        title: "this is note 2",
        lines: [
            { text: "this is line 1" },
            { text: "this is line 2" },
            { text: "i hope this is good" }
        ]
    },
    {
        id: "3c3c",
        lines: [{ text: "some notes don't have titles" }]
    },
    {
        id: "4d4d",
        title: "yeah buddy",
        lines: [
          { text: "a fourth note"},
          { text: "this is working!", checked: true }
        ]
    }
];