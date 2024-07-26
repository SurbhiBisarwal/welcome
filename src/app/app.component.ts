import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  working = false;
  studying = false;
  companyName = "";
  designation = "";
  collegeName = "";
  course = "";

  onStatusChange(event: any) {
    const status = event.target.value;
    if (status === "working") {
      this.working = true;
      this.studying = false;
    } else if (status === "studying") {
      this.working = false;
      this.studying = true;
    }
  }
}
