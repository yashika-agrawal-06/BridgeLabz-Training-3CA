"use strict";

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false; // Default state
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Sorry, "${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Success: "${this.title}" has been issued.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Success: "${this.title}" has been returned.`);
    return true;
  }
}

// Create an array of book objects
const library = [
  new Book("1984", "George Orwell", "ISBN001"),
  new Book("To Kill a Mockingbird", "Harper Lee", "ISBN002"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN003")
];

// Display all available books
function displayAvailableBooks() {
  console.log("--- Available Books ---");
  const availableBooks = library.filter(book => !book.isIssued);
  availableBooks.forEach(book => console.log(`${book.title} by ${book.author} (ISBN: ${book.ISBN})`));
}

// Function to search and issue a book by ISBN
function issueBookByISBN(searchISBN) {
  const book = library.find(b => b.ISBN === searchISBN);
  if (book) {
    book.issueBook();
  } else {
    console.log(`Book with ISBN ${searchISBN} not found.`);
  }
}

// Test Operations
displayAvailableBooks();
issueBookByISBN("ISBN002"); // Issues Mockingbird
issueBookByISBN("ISBN002"); // Fails, already issued
console.log("\nAfter Issuing:");
displayAvailableBooks();
