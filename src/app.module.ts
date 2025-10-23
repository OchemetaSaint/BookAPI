import { Module } from '@nestjs/common';
import { BooksService } from './app.service';
import { BooksController } from './app.controller';
import { Controller } from './.controller';

@Module({
  imports: [],
  controllers: [BooksController, Controller],
  providers: [BooksService],
})
export class AppModule {}
