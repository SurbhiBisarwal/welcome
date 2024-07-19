import { Component } from "@angular/core";
import { Competitor } from "./match";
import { compList } from "./match";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  comps: Competitor[] = compList;
  comps1: Competitor[];
  leading: string = null;
  lastChange: string = null;
  ngOnInit() {
    this.comps1 = [...this.comps];
    this.comps1.sort(this.mysort);
    this.leading = this.comps1[0].name;
  }
  newChanges(c1: Competitor) {
    this.comps1.sort(this.mysort);
    this.leading = this.comps1[0].name;
    this.lastChange = c1.name;
  }
  mysort(c1: Competitor, c2: Competitor): number {
    return c2.score - c1.score;
  }
}
