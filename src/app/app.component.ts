import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  selectedProducts = "None";
  selectionCount = 0;
  products: string[] = ["Mobile", "TV", "Laptop"];
  xyz(value) {
    console.log("Selected Value  at app component", value);
    this.selectedProducts = value;
    this.selectionCount++;
  }
}
