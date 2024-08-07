import { Component } from "@angular/core";
import { NetService } from "./net.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  arr: string[] = ["Name", "Numbers", "Details", "Courses"];
  selectedOption: string = this.arr[0]; // Default selected option
  strData: string = "";

  urls: { [key: string]: string } = {
    Name: "https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/bins/1g7sq4",
    Numbers:
      "https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/bins/1c3wng",
    Details:
      "https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/bins/16r07g",
    Courses:
      "https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/bins/18py7w",
  };

  constructor(private netService: NetService) {}

  getData() {
    const url = this.urls[this.selectedOption];
    if (url) {
      this.netService.getData(url).subscribe((resp) => {
        this.strData = JSON.stringify(resp, null, 2);
      });
    }
  }
}
