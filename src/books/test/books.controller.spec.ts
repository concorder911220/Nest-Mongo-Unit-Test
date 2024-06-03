import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { bookStub } from './stubs/book.stub';
import { BookWithId } from '../books.model';
import { CreateBookDto } from '../create-book.dto';

jest.mock('../books.service');

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a book', async () => {
      const createBookDto: CreateBookDto = { title: 'Title Example', author: 'Author Example' };
      const book = bookStub();
      jest.spyOn(service, 'create').mockResolvedValue(book);

      expect(await controller.create(createBookDto)).toBe(book);
    });
  });
  describe('findAll', () => {
    it('should return an array of books', async () => {
      const bookArray = [bookStub()];
      jest.spyOn(service, 'findAll').mockResolvedValue(bookArray);

      expect(await controller.findAll()).toBe(bookArray);
    });
  });

  // describe('findOne', () => {
  //   describe('when find one is called', () => {
  //     const book = bookStub();
  //     let _book: BookWithId;
  //     beforeEach(async () => {
  //       _book = await controller.findOne(book._id)
  //     })
  //   })
  // });

  describe('findOne', () => {
    it('should return a single book', async () => {
      const book = bookStub();
      jest.spyOn(service, 'findById').mockResolvedValue(book);

      expect(await controller.findOne(book._id)).toBe(book);
    });
  });

  describe('update', () => {
    it('should update a book', async () => {
      const updateBookDto: CreateBookDto = { title: 'Updated Title', author: 'Updated Author' };
      const book = bookStub();
      jest.spyOn(service, 'updateById').mockResolvedValue(book);

      expect(await controller.update(book._id, updateBookDto)).toBe(book);
    });
  });

  describe('remove', () => {
    it('should remove a book', async () => {
      const book = bookStub();
      jest.spyOn(service, 'deleteById').mockResolvedValue(book);

      expect(await controller.remove(book._id)).toBe(book);
    });
  });
});
