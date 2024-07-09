import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  expression: string = "0";
  value: number = 0;
  addExpression(num: number): void {
    // if (this.expression === "0") {
    //   this.expression = `${num}`;
    // }

    this.expression += `+${num}`;

    this.value += num;
  }

  reset(): void {
    this.expression = "0";
    this.value = 0;
  }
}
