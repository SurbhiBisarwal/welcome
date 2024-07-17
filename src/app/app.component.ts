import { Component } from "@angular/core";
import { Movie } from "./movie";
import { moviedb } from "./movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  movies: Movie[] = moviedb;
}
