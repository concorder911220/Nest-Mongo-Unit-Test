// import { Test, TestingModule } from '@nestjs/testing';
// import { BooksController } from '../books.controller';

import { Test } from "@nestjs/testing"
import { BooksController } from "../books.controller"
import { BooksService } from "../books.service"

// describe('BooksController', () => {
//   let controller: BooksController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [BooksController],
//     }).compile();

//     controller = module.get<BooksController>(BooksController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
describe("BooksController", () => {
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BooksController],
      providers: [BooksService]
    }).compile()
  })
})
