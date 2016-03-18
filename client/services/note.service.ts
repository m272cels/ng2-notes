import {Injectable} from 'angular2/core';
// for http.get
import {Http, Response} from 'angular2/http';
// for http.post
import {Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Note} from '../interfaces/note';

@Injectable()

export class NoteService {
  constructor(private _http: Http) {}

  private _notesUrl = 'notes';

  getNotes() {
    return this._http.get(this._notesUrl)
        .map(res => <Note[]> res.json().data)
        .catch(this.handleError);
  }

  // getNote(id: string) {
  //   return Promise.resolve(NOTES)
  //     .then(notes => notes.filter(
  //       note => note.id === id
  //     )[0]
  //   );
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  createNote(newNote: Note) {
    console.log('note.service createNote()');
    let body = JSON.stringify(newNote);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._notesUrl, body, options);
    // return Promise.resolve(1);
  }

  deleteNote(noteId: string) {
    console.log('note.service deleteNote()');
    return this._http.delete(this._notesUrl + '/' + noteId);
  }
}
