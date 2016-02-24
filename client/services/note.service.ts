import {Injectable} from 'angular2/core';

import {Note} from '../interfaces/note';

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

@Injectable()

export class NoteService {
  getNotes() {
    return Promise.resolve(NOTES);
  }

  getNote(id: string) {
    return Promise.resolve(NOTES)
      .then(notes => notes.filter(
        note => note.id === id
      )[0]
    );
  }
}
