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
      // console.log('need to save new note');
      this._noteService.createNote(this.newNote).subscribe(
        () => {
          this.newNote = { lines: [{ text: "" }] };
          this.notes[this.notes.length] = this.newNote;
        },
        error => console.log(error)
      );
    }
  }

  deleteNote(id: string) {
    console.log(id);
    this._noteService.deleteNote(id).subscribe(
      () => {
        var index = this.notes.findIndex((val) => val._id === id);
        this.notes.splice(index, 1);
      },
      error => console.log(error)
    );
  }

  constructor(
    private _noteService: NoteService,
    private _router: Router) {
  }
}