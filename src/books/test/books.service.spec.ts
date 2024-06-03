import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from '../books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../books.model';
import { CreateBookDto } from '../create-book.dto';

describe('BooksService', () => {
  let bookService: BooksService;
  let model: Model<Book>;

  const mockBookModel = {
    create: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: mockBookModel,
        },
      ],
    }).compile();

    bookService = module.get<BooksService>(BooksService);
    model = module.get<Model<Book>>(getModelToken(Book.name));
  });

  it('should be defined', () => {
    expect(bookService).toBeDefined();
  });

  const mockBook = {
    _id: '61c0ccd11d7b345ale5034j',
    title: 'Title Example',
    author: 'Author',
  };

  describe('create', () => {
    it('should create and return a book', async () => {
      const newBook: CreateBookDto = {
        title: 'Title Example',
        author: 'Author',
      };

      jest.spyOn(model, 'create').mockImplementationOnce(mockBook);
      const result = await bookService.create(newBook as CreateBookDto);

      expect(result).toEqual(mockBook);
    });
  });
});
