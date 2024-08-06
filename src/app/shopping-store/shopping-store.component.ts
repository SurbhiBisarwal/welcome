import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-shopping-store",
  templateUrl: "./shopping-store.component.html",
  styleUrls: ["./shopping-store.component.scss"],
})
export class ShoppingStoreComponent implements OnInit {
  // @Output() productSelected = new EventEmitter<any[]>();

  products = [
    { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
    { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
    { id: "PEA531", name: "Pears", category: "Soap", stock: true },
    { id: "LU7264", name: "Lux", category: "Soap", stock: false },
    { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
    { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
    { id: "LI130", name: "Liril", category: "Soap", stock: true },
    { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
    { id: "MAG441", name: "Maggi", category: "Food", stock: true },
  ];
  @Output() categorySelected = new EventEmitter<string[]>();
  categories: string[] = ["Food", "Toothpaste", "Soap"];

  selectedCategories: string[] = [];

  ngOnInit() {}

  onCheckboxChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.categorySelected.emit(this.selectedCategories);
  }
}

//   selectedProducts: any[] = [];

//   ngOnInit() {}

//   onRadioChange(product: any, event: any) {
//     if (event.target.checked) {
//       this.selectedProducts = [product]; // Only one product can be selected at a time with radio buttons
//     }
//     this.productSelected.emit(this.selectedProducts);
//   }
// }
