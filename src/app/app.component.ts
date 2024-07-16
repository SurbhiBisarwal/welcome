import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  runs: number[] = [];

  addRun(run: number): void {
    this.runs.push(run);
    console.log(`Runs scored: ${run}`);
  }

  getRunClass(run: number): string {
    switch (run) {
      case 0:
        return "zero-run";
      case 1:
        return "one-run";
      case 2:
        return "two-run";
      case 3:
        return "three-run";
      case 4:
        return "four-run";
      case 6:
        return "six-run";
      default:
        return "";
    }
  }
}
