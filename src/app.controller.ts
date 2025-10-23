import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './fakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.findById(bookId);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if (!book.author || !book.title || !book.publishedDate) return undefined;

    return this.booksService.createBook(bookData);
  }

  @Put(':id')
  upDateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    return this.booksService.updateBook(+id, book);
  }

  @Delete(':id')
  deletedBook(@Param('id') id: string): Book[] {
    return this.booksService.deleteBook(+id);
  }
}
