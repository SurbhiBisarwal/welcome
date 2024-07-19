import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Competitor } from "../match";

@Component({
  selector: "app-competition",
  templateUrl: "./competition.component.html",
  styleUrls: ["./competition.component.scss"],
})
export class CompetitionComponent implements OnInit {
  @Input() comp: Competitor;
  @Output() compChanged = new EventEmitter<Competitor>();

  constructor() {}

  ngOnInit() {}

  add(x: number) {
    this.comp.score += x;
    this.compChanged.emit(this.comp);
  }
}
