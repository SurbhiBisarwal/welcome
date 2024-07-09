import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  name: string = "Jack Smith";
  email: string = " jack.smith@gmail.com";
  number: string = "63129847";
}

//   submit() {
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let mobile = document.getElementById("mobile");
//   }
// }
