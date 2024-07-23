import { Book } from "./Books";
import { Component } from "@angular/core";
import { booksdb } from "./Books";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  books: Book[] = booksdb.slice(); // Create a copy of booksdb for return function

  reservedBook: string[] = [];

  reserveBook(book: Book) {
    const index = this.books.findIndex((data) => data == book);
    this.books.splice(index, 1);
    this.reservedBook.push(book.name);
    console.log(this.reservedBook);
  }

  returnReservedBook(item: string) {
    const index = this.reservedBook.findIndex((name) => name === item);
    console.log("Return book name:", item);
    console.log("Reserved book index:", index);
    if (index !== -1) {
      this.reservedBook.splice(index, 1);
      const returnedBook = booksdb.find((book) => book.name === item);
      if (returnedBook) {
        this.books.push(returnedBook);
        console.log("Books after return:", this.books);
      }
    }
  }
}
