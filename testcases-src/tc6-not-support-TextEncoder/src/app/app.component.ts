import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Case';
  raw = '123';
  encodeString = '';

  public generate() {
    const encoder = new TextEncoder();
    this.encodeString = encoder.encode(this.raw).map(v => {
      return v;
    }).join(',');
  }

}
