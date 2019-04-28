import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    (navigator as any).clipboard
      .writeText("some text")
      .then(() => {
        console.log("Text copied.");
      })
      .catch(() => {
        console.log("Failed to copy text.");
      });
  }
}
