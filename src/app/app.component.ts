import { Book } from "./Books";
import { Component } from "@angular/core";
import { booksdb } from "./Books";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  books: Book[] = booksdb;

  reservedBook: string[] = [];

  reserveBook(book: Book) {
    const index = this.books.findIndex((data) => data == book);
    this.books.splice(index, 1);
    this.reservedBook.push(book.name);
    console.log(this.reservedBook);
  }
}
