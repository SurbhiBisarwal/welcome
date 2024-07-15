import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  resultOfA: string = "pass";
  resultOfB: string = "pass";
  setA(value: string): void {
    this.resultOfA = value;
    console.log(this.resultOfA);
  }
  setB(value: string): void {
    this.resultOfB = value;
    console.log(this.resultOfB);
  }
}
