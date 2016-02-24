import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {NotesComponent} from '../notes/notes.component';
import {NoteService} from '../../services/note.service';

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    NoteService
  ]
})

@RouteConfig([
  {
    path: '/notes',
    name: 'Notes',
    component: NotesComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = "Angular Notes";
}