import { Component } from "@angular/core";
import { Song } from "./songs";

import { songsdb } from "./songs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  songs: Song[] = songsdb;
}
