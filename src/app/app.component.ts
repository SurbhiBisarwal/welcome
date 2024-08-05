import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  names = ["James", "Steve", "William", "kathy", "Edward"];
  namesIds = [
    { name: "James", id: "AB455" },
    { name: "Steve", id: "GM072" },
    { name: "William", id: "CX499" },
    { name: "Kathy", id: "MM746" },
    { name: "Edward", id: "KT108" },
  ];

  namesStructure = null;
  namesSelected = "";
  idSelected = "";
  ngOnInit() {
    this.updateValues();
  }
  updateValues() {
    this.namesStructure = this.names.map((n1) => ({
      name: n1,
      selected: false,
    }));
    let sNames = this.namesSelected.split(",");
    console.log(sNames);
    for (let i = 0; i < sNames.length; i++) {
      let item = this.namesStructure.find((n1) => n1.name === sNames[i]);
      if (item) item.selected = true;
    }
    console.log(this.namesStructure);
  }

  optChange() {
    console.log(this.namesStructure);
    let filteredNames = this.namesStructure.filter((n1) => n1.selected);
    let arrayNames = filteredNames.map((n1) => n1.name);
    this.namesSelected = arrayNames.join(",");
    console.log(this.namesSelected);
    // let arrayIds = filteredNames.map((n1) => n1.ids);
    // this.idSelected = arrayIds.join(",");
    // console.log(this.idSelected);
  }
}
