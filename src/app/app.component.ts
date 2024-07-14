import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  employees = [
    {
      name: "JackSmith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "MaryRobbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "SteveWilliams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "BobAndrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "DaveMartin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "JuliaClarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "KathyJones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "TomBresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];

  getNumberOfEmployees(): number {
    return this.employees.length;
  }

  // Get employee count per department
  getDeptCount(dept: string): number {
    return this.employees.filter((emp) => emp.dept === dept).length;
  }

  // Calculate total salary
  getTotalSalary(): number {
    return this.employees.reduce((total, emp) => total + emp.salary, 0);
  }

  // Calculate average salary
  getAverageSalary(): number {
    const totalSalary = this.getTotalSalary();
    return totalSalary / this.employees.length;
  }

  // Get minimum salary
  getMinSalary(): number {
    return Math.min(...this.employees.map((emp) => emp.salary));
  }

  // Get maximum salary
  getMaxSalary(): number {
    return Math.max(...this.employees.map((emp) => emp.salary));
  }

  // Optional: Example button functionality
  showMoreDetails() {
    console.log("More details button clicked");
  }
}
