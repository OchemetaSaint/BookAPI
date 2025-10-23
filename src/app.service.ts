import { Injectable } from '@nestjs/common';
import { Book, fakeDatabase } from './fakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return fakeDatabase;
  }

  findById(id: number): Book | undefined {
    return fakeDatabase.find((book) => book.id === id);
  }

  createBook(book: Partial<Book>): Book {
    const newID = fakeDatabase[fakeDatabase.length - 1].id + 1;
    const newBook: Book = {
      id: newID,
      title: book.title ?? '',
      author: book.author ?? '',
      publishedDate: book.publishedDate ?? new Date(),
    };

    fakeDatabase.push(newBook);
    return newBook;
  }

  updateBook(
    bookID: number,
    updatedBookFields: Partial<Book>,
  ): Book | undefined {
    const currentBook = fakeDatabase.find((book) => book.id === bookID);
    const updatedBook = {
      id: bookID,
      title: updatedBookFields.title ?? currentBook?.title ?? '',
      author: updatedBookFields.author ?? currentBook?.author ?? '',
      publishedDate:
        updatedBookFields.publishedDate ??
        currentBook?.publishedDate ??
        new Date(),
    };
    fakeDatabase[bookID - 1] = updatedBook;
    return updatedBook;
  }
  deleteBook(bookID: number): Book[] {
    // fakeDatabase = fakeDatabase.filter((book) => book.id !== bookID);
    fakeDatabase.splice(bookID - 1, 1);
    return fakeDatabase;
  }
}
