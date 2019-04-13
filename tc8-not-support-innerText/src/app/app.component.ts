import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test case';

  @ViewChild('box') public box: ElementRef;

  public change() {
    this.box.nativeElement.innerText = 'Changed!';
  }


}


