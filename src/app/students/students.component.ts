import { Student } from "./../student";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  @Input() msg: Student;

  @Output() messageEvent = new EventEmitter<Student>();

  ngOnInit() {}
  sendMessage() {
    this.messageEvent.emit(this.msg);
    console.log(this.msg);
    this.msg = "";
  }
}
