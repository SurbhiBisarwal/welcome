import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  teamAScore: number = 0;
  teamBScore: number = 0;

  point3(team): void {
    if (team == "A") {
      this.teamAScore = this.teamAScore + 3;
    } else {
      this.teamBScore = this.teamBScore + 3;
    }
  }
  point2(team): void {
    if (team == "A") {
      this.teamAScore = this.teamAScore + 2;
    } else {
      this.teamBScore = this.teamBScore + 2;
    }
  }
  freeThrow(team): void {
    if (team == "A") {
      this.teamAScore = this.teamAScore + 1;
    } else {
      this.teamBScore = this.teamBScore + 1;
    }
  }
  reset(): void {
    this.teamAScore = 0;
    this.teamBScore = 0;
  }
}
