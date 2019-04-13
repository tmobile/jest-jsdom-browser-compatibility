import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Case';
  radom: number;
  color='red';

  public generate() {
    this.radom = crypto.getRandomValues(new Uint32Array(1))[0];
  }

}
