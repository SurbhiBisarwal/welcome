import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  showMainPage: boolean = true;
  showAB: boolean = false;
  show19: boolean = false;
  showMN: boolean = false;
  codes: string[] = [];
  newCode: string[] = [];
  codeType: string = "";

  codePattern(section: string) {
    this.showMainPage = false;
    this.showAB = false;
    this.show19 = false;
    this.showMN = false;

    if (section === "ab") {
      this.codeType = "AB123";
      this.showAB = true;
    } else if (section === "09") {
      this.codeType = "0-9";
      this.show19 = true;
    } else if (section === "mn") {
      this.codeType = "MN012";
      this.showMN = true;
    }
  }

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
    this.showMainPage = true;
    this.showAB = false;
    this.show19 = false;
    this.showMN = false;
  }
}
