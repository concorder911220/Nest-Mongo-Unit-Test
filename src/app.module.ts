import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://martinali910205:BUdpvQ3JlOOpJG9D@sonika.8zkdrfc.mongodb.net/?retryWrites=true&w=majority&appName=Sonika',
      {
        dbName: 'book',
      },
    ),
    BooksModule,
  ],
})
export class AppModule {}
