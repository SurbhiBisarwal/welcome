import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  startingYear: number;
  numberOfYears: number;
  years: number[] = [];
  selectedYear: number;

  configureYears() {
    this.years = [];
    for (let i = 0; i < this.numberOfYears; i++) {
      this.years.push(this.startingYear + i);
    }
  }
}
