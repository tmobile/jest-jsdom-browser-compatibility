import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Case';
  selectValue = '';

  public copy() {
    this.selectValue = 'fdasf';
    document.execCommand('cut', false, null);
  }

}

