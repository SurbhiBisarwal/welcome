import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  products: Product[] = [
    new Product("5Star", "Chocolates", 30, 6, 18),
    new Product("Colgate", "Toothpaste", 60, 57, 8),
    new Product("Lays-Salted", "Chips", 15, 12, 4),
    new Product("Coke", "Beverages", 40, 25, 7),
    new Product("Mars", "Chocolates", 30, 6, 18),
    new Product("Pepsodent", "Toothpaste", 25, 63, 3),
    new Product("Pringles", "Chips", 10, 35, 2),
    new Product("Diet Coke", "Beverages", 30, 25, 11),
    new Product("Snickers", "Chocolates", 20, 10, 8),
    new Product("Sensodyne", "Toothpaste", 20, 70, 2),
    new Product("Doritos", "Chips", 16, 20, 5),
    new Product("Pepsi", "Beverages", 28, 25, 14),
  ];

  categories: string[] = [];
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.categories = Array.from(
      new Set(this.products.map((product) => product.category))
    );
    this.filteredProducts = this.products;
  }

  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    if (selectedCategory != "None") {
      this.filteredProducts = this.products.filter(
        (product) => product.category === selectedCategory
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}

class Product {
  constructor(
    public name: string,
    public category: string,
    public stock: number,
    public price: number,
    public sales: number
  ) {}
  categories: string[] = [];
  filteredProducts: Product[] = [];
}
