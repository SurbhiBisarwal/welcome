import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  receivedMessage: string = "";

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
