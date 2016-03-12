import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Note} from '../interfaces/note';

@Injectable()

export class NoteService {
  constructor(private _http: Http) {}

  private _notesUrl = 'notes';

  getNotes() {
    return this._http.get(this._notesUrl)
        // .do(res => console.log(res))
        .map(res => <Note[]> res.json()) //NOT res.json().data like in the guide due to how my server is responding with the data directly
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
    return Promise.resolve(1);
  }
}
