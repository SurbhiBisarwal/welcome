import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  students = [];

  newStudent = { name: "", marks: 0, grade: "" };

  addstu() {
    this.newStudent.grade = this.getGrade(this.newStudent.marks);
    this.students.push({ ...this.newStudent });
    this.newStudent = { name: "", marks: 0, grade: "" };
  }

  getGrade(marks: number): string {
    if (marks >= 85) {
      return "A";
    } else if (marks >= 65) {
      return "B";
    } else {
      return "C";
    }
  }
}
