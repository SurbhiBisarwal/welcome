import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  email: string = "";
  password: string = "";
  showEmailError: boolean = false;
  showPasswordError: boolean = false;

  // Event handling method
  event(s: string) {
    console.log(s);
  }

  // Method to validate fields on focusout
  validateField(field: string) {
    if (field === "email") {
      this.showEmailError = this.email.trim() === "";
    } else if (field === "password") {
      this.showPasswordError = this.password.trim() === "";
    }
  }

  // Method to reset error state on focus
  resetError(field: string) {
    if (field === "email") {
      this.showEmailError = false;
    } else if (field === "password") {
      this.showPasswordError = false;
    }
  }
}
