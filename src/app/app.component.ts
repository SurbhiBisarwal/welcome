import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  x: number = 8;
  y: number = 5;
  result: string = "";

  add(): void {
    this.result = `${this.x} + ${this.y} = ${this.x + this.y}`;
  }

  sub(): void {
    this.result = `${this.x} - ${this.y} = ${this.x - this.y}`;
  }

  multi(): void {
    this.result = `${this.x} * ${this.y} = ${this.x * this.y}`;
  }
}

//   submit() {
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let mobile = document.getElementById("mobile");
//   }
// }
