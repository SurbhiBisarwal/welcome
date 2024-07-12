import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  products = [
    { id: "P104", brand: "Pepsi", price: 4, qtySold: 22 },
    { id: "C124", brand: "Coke", price: 4, qtySold: 26 },
    { id: "M155", brand: "Maggie", price: 6, qtySold: 10 },
    { id: "DM241", brand: "Cadburys", price: 10, qtySold: 15 },
    { id: "5S118", brand: "5 Star", price: 8, qtySold: 8 },
  ];
  newProduct = {
    id: "",
    brand: "",
    price: 0,
    qtySold: 0,
  };

  getTotalQuantitySold() {
    return this.products.reduce((total, product) => total + product.qtySold, 0);
  }

  getTotalSalesValue() {
    return this.products.reduce(
      (total, product) => total + product.price * product.qtySold,
      0
    );
  }
  resetQuantity(product) {
    product.qtySold = 0;
  }

  incrementQuantity(product) {
    product.qtySold += 1;
  }
  add() {
    if (
      this.newProduct.id &&
      this.newProduct.brand &&
      this.newProduct.price > 0
    ) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { id: "", brand: "", price: 0, qtySold: 0 };
    }
  }
}
