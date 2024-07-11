import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  num: number[] = [2, 3, 5, 7];
  n1: number = 0;

  add(n2): void {
    this.num.push(n2);
  }

  delete(i: number): void {
    let n1: number[];
    console.log("i=" + i);
    n1 = this.num.splice(i, 1);
    // this.n1 = n1[i];
  }

  get sum(): number {
    return this.num.reduce((acc, curr) => acc + curr, 0);
  }

  get evenCount(): number {
    return this.num.reduce((acc, curr) => acc + (curr % 2 === 0 ? 1 : 0), 0);
  }
}
