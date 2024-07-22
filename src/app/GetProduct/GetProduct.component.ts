import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-GetProduct",
  templateUrl: "./GetProduct.component.html",
  styleUrls: ["./GetProduct.component.css"],
})
export class GetProductComponent implements OnInit {
  @Input() productArr;
  @Output() selectedValue = new EventEmitter<string>();
  selectedProducts: string = "";

  constructor() {}

  ngOnInit() {}
  sendValue() {
    this.selectedValue.emit(this.selectedProducts);
    console.log(this.selectedProducts);
    this.selectedProducts = "";
  }
}
