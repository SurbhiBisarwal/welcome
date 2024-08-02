import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  courses: string[] = ["Angular", "Python", "Java", "Spring Boot"];
  event(s: string) {
    console.log(s);
  }
}
