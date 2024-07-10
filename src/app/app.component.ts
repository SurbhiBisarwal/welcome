import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  cities: string[] = ["Delhi", "London", "Paris", "New York"];
  cname: string = "";
  add(position: string) {
    if (this.cname) {
      if (position === "top") {
        this.cities.unshift(this.cname);
      } else if (position === "bottom") {
        this.cities.push(this.cname);
      }
      this.cname = "";
    }
  }

  remove(position: string) {
    if (this.cities.length > 0) {
      if (position === "top") {
        this.cities.shift();
      } else if (position === "bottom") {
        this.cities.pop();
      }
    }
  }
}
