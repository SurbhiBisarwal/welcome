import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-store-management",
  templateUrl: "./store-management.component.html",
  styleUrls: ["./store-management.component.scss"],
})
export class StoreManagementComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  emitSelectedValue(event) {
    this.selectedValue.emit(event);
  }
}
