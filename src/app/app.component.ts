import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  codes: string[] = [];
  newCode: string[] = [];
  addCode() {
    const codeString = this.newCode.join("");
    if (codeString) {
      if (this.codes.includes(codeString)) {
        alert("Code already exists!");
      } else {
        this.codes.push(codeString);
        this.newCode = [];
      }
    }
  }

  add(value: string): void {
    this.newCode.push(value);
  }

  clearCode(): void {
    this.newCode = [];
  }
}
