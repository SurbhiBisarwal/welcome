import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  num: Number = 0;
  add5(): void {
    this.num = this.num + 5;
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
