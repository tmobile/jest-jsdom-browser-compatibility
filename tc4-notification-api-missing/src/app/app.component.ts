import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Case';
  currentPermissionStatus = '';

  public grantPermission() {
    this.currentPermissionStatus = 'checking';
    Notification.requestPermission().then((status) => {
      this.currentPermissionStatus = status;
    });
  }
}
