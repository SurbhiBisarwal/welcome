import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  joinYear: number;
  leaveYear: number;
  totalYear: number;

  experience() {
    this.totalYear = this.leaveYear - this.joinYear;
  }
}
