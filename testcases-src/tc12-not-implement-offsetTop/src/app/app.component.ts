import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testlocation';
  marginTop = '100px';
  buttonTitle = 'click to move me!';
  buttonTitle2 = 'click to move me!';

  @ViewChild('box') public box: ElementRef;
  @ViewChild('box2') public 2: ElementRef;

  public moveBox() {
    this.box.nativeElement.style.marginTop = '';
    this.buttonTitle = 'moved!';
  }

  public moveBox2() {
    this.marginTop = '';
    this.buttonTitle2 = 'moved!';
  }
}


//TODO: 如果直接用 ng 的事件绑定，那么是测试结果都是 100px
