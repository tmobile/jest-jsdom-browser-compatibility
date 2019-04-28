import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    fetch("/api")
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  }
}
