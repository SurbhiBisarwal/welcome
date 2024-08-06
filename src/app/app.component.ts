import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
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

  //   filteredProducts = this.products;

  //   onProductSelected(selectedProducts: any[]) {
  //     this.filteredProducts = selectedProducts;
  //   }
  // }

  filteredProducts = [];

  // This method will be triggered when a category is selected in the child component
  onCategorySelected(selectedCategory: string[]) {
    this.filteredProducts = this.products.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }
}
