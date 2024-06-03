import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

// Create an extended interface for testing purposes
export interface BookWithId extends Book {
  _id: string;
}
