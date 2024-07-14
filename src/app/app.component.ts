import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  check: boolean = true;

  makeTrue(): void {
    console.log("In function MakeTrue");
    this.check = true;
  }
  makeFalse(): void {
    console.log("In function MakeFalse");
    this.check = false;
  }
}
