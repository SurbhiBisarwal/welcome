import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  courses: string[] = ["All", "Angular", "Python", "Java", "Spring Boot"];
  students: { name: string; course: string }[] = [
    { name: "James", course: "Angular" },
    { name: "Mary", course: "Python" },
    { name: "Bob", course: "Angular" },
    { name: "Pam", course: "Android" },
    { name: "Steve", course: "Angular" },
    { name: "William", course: "Python" },
    { name: "Julia", course: "Android" },
    { name: "Matt", course: "Java" },
    { name: "Martin", course: "Java" },
    { name: "Katherine", course: "Angular" },
    { name: "Nick", course: "Python" },
    { name: "Tim", course: "Java" },
  ];

  selectedCourse: string = "All";

  get filteredStudents() {
    if (this.selectedCourse === "All") {
      return this.students;
    }
    return this.students.filter(
      (student) => student.course === this.selectedCourse
    );
  }
}
