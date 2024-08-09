import { Component } from "@angular/core";
import { NetService } from "./net.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  urlPost = "https://dummy.restapiexample.com/api/v1/create";
  cList = ["India", "France", "USA", "Japan"];
  strData: string = "";

  constructor(private netService: NetService) {}

  postData() {
    this.netService.postData(this.urlPost, this.cList).subscribe((postresp) => {
      this.strData = JSON.stringify(postresp);
    });
  }
}
