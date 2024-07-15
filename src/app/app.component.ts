import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  x: number = 0;
  add(): void {
    this.x++;
  }
  sub(): void {
    this.x--;
  }
}
