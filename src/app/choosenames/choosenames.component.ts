import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-choosenames",
  templateUrl: "./choosenames.component.html",
  styleUrls: ["./choosenames.component.scss"],
})
export class ChoosenamesComponent implements OnInit {
  constructor() {}
  @Input() namesCB;
  @Output() optSel = new EventEmitter();
  ngOnInit() {}
  emitChange() {
    this.optSel.emit();
  }
}
