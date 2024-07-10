import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  courses: string[] = ["Angular", "Java", "Android", "Python"];
  num: number[] = [5, 8, 10, 11, 15, 3, 6];
}
