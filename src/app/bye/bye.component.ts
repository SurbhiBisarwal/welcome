import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-bye",
  templateUrl: "./bye.component.html",
  styleUrls: ["./bye.component.scss"],
})
export class ByeComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get("username");
    });
  }
}
