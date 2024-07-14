import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
// export class AppComponent {
//   check: boolean = true;
//   makeTrue(V1, V2): void {
//     console.log("In function MakeTrue");
//     this.check = true;
//   }
//   makeFalse(V1, V2): void {
//     console.log("In function MakeFalse");
//     this.check = false;
//   }
// }
export class AppComponent {
  v1: boolean = true;
  v2: boolean = true;

  setV1(value: boolean): void {
    this.v1 = value;
  }

  setV2(value: boolean): void {
    this.v2 = value;
  }

  // get message1(): string {
  //   return this.v1 || this.v2 ? "Good" : "";
  // }
  get message(): string {
    return this.v1 && this.v2 ? "Excellent" : "";
  }
}
