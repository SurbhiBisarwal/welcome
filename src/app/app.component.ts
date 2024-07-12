import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  num: number[] = [21, 8, 10, 15, 7];
  n1: number = 0;
  // filteredNum: number[] = [];

  add(n2): void {
    this.num.push(n2);
  }

  delete(i: number): void {
    let n1: number[];
    console.log("i=" + i);
    n1 = this.num.splice(i, 1);
  }

  insertOrder(): void {
    this.num = Array.from(this.num);
    console.log(this.num);
  }

  ascending(): void {
    this.num = Array.from(this.num).sort((a, b) => a - b);
    console.log(this.num);
  }

  descending(): void {
    this.num = Array.from(this.num).sort((a, b) => b - a);
    console.log(this.num);
  }

  even(): void {
    this.num = this.num.filter((n1) => n1 % 2 === 0);
    console.log(this.num);
  }

  odd(): void {
    this.num = this.num.filter((n1) => n1 % 2 !== 0);
    console.log(this.num);
  }
}
