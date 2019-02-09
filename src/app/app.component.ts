import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui-lib-tester';

  constructor() { }

  navigate(url: string) {
    window.location.href = url;
  }
}
