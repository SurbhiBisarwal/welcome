import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  players = [
    { name: "Jack", answered: 10, correct: 8 },
    { name: "Steve", answered: 8, correct: 7 },
    { name: "William", answered: 12, correct: 9 },
    { name: "Kathy", answered: 11, correct: 10 },
  ];

  getPlayer(position: number) {
    let sortPlayers = [...this.players];
    sortPlayers.sort(this.sortScore);
    return sortPlayers[position - 1];
  }

  sortScore(p1, p2) {
    let p1s = p1.correct * 2 - (p1.answered - p1.correct);
    let p2s = p2.correct * 2 - (p2.answered - p2.correct);
    return p2s - p1s;
  }

  totalQues() {
    return this.players.reduce((acc, curr) => acc + curr.answered, 0);
  }
  correctAns() {
    return this.players.reduce((acc, curr) => acc + curr.correct, 0);
  }
}
