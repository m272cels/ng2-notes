import {Component} from 'angular2/core';

@Component({
    selector: "my-app",
    template: `
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = "Angular Notes";
}