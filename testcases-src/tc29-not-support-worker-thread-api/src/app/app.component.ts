import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  workerResult = '';
  ngOnInit() {

    const worker = new Worker('assets/worker.js');

    worker.postMessage([3, 5]);
    worker.onmessage = (e) => {
      this.workerResult = e.data;
    };

  }
}
