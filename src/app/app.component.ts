import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  num: Number = 8;
  add1(): void {
    this.num = this.num + 1;
  }
  add10(): void {
    this.num = this.num + 10;
  }
  add100(): void {
    this.num = this.num + 100;
  }
  reset(): void {
    this.num = 0;
  }
}

//   submit() {
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let mobile = document.getElementById("mobile");
//   }
// }
