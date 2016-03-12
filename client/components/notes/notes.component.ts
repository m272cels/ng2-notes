import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Note} from '../../interfaces/note';
import {NoteService} from '../../services/note.service';

@Component({
    selector: 'my-notes',
    templateUrl: 'client/components/notes/notes.component.html',
    styleUrls: ['client/components/notes/notes.component.css'],
    // directives: [NoteDetailComponent],
})

export class NotesComponent implements OnInit {
  title = "Angular Notes";
  notes: Note[];
  newNote = { lines: [{text: ""}] };
  newNoteForm = false;

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
      this._noteService.getNotes().subscribe(
            notes => this.notes = notes,
            error => console.log(error)
          );
  }

  openNewNote(event: any) {
    this.newNoteForm = true;
    event.stopPropagation();
  }

  closeNewNote() {
    this.newNoteForm = false;
    if (this.newNote.title || this.newNote.lines[0].text) {
      console.log('need to save new note');
    }
  }

  constructor(
    private _noteService: NoteService,
    private _router: Router) {
  }
}