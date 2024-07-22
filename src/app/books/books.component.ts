import { Book } from "./../Books";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  @Input() Books: Book;
  @Output() issueBook = new EventEmitter<Book>();
  constructor() {}

  ngOnInit() {}
  issue() {
    this.issueBook.emit(this.Books);

    // console.log(this.Books);
    // this.Books = "";
  }
}
