import { Component, Input, OnInit } from "@angular/core";
import { Song } from "../songs";

@Component({
  selector: "app-songs",
  templateUrl: "./songs.component.html",
  styleUrls: ["./songs.component.scss"],
})
export class SongsComponent implements OnInit {
  @Input() songs: Song;
  constructor() {}

  ngOnInit() {}
}
