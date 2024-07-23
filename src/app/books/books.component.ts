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
  descriptionLimit: number = 100; // Limit for truncated description
  showMore: boolean = false; // Toggle state

  description() {
    this.showMore = !this.showMore; // Toggle between showing more or less
  }
  get displayDescription(): string {
    if (
      this.showMore ||
      this.Books.description.length <= this.descriptionLimit
    ) {
      return this.Books.description;
    }
    return this.Books.description.substring(0, this.descriptionLimit) + "...";
  }
}
