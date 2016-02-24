import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Note} from '../../interfaces/note';
import {NoteService} from '../../services/note.service';

@Component({
    selector: 'my-notes',
    templateUrl: 'client/components/notes/notes.component.html',
    styleUrls: ['client/components/notes/notes.component.css']
    // directives: [NoteDetailComponent]
})

export class NotesComponent implements OnInit {
  notes: Note[];

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this._noteService.getNotes().then(notes => this.notes = notes);
  }

  constructor(
    private _noteService: NoteService,
    private _router: Router) {
  }
}