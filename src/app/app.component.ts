import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  length: number = 0;

  event(value: string) {
    this.length = value.length;
  }
}
