import { BookWithId } from '../books.model';
import { bookStub } from '../test/stubs/book.stub';

export class BooksService {
  async create(createBookDto: Partial<BookWithId>): Promise<BookWithId> {
    return Promise.resolve(bookStub());
  }

  async findAll(): Promise<BookWithId[]> {
    return Promise.resolve([bookStub()]);
  }

  async findById(id: string): Promise<BookWithId> {
    return Promise.resolve(bookStub());
  }

  async updateById(id: string, updateBookDto: Partial<BookWithId>): Promise<BookWithId> {
    return Promise.resolve({ ...bookStub(), ...updateBookDto });
  }

  async deleteById(id: string): Promise<BookWithId> {
    return Promise.resolve(bookStub());
  }
}
