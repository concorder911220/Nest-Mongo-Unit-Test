import { BookWithId } from '../../books.model';
import { Types } from 'mongoose';

export const bookStub = (): BookWithId => {
  return {
    _id: new Types.ObjectId().toHexString(),
    title: 'Title Example',
    author: 'Author',
  };
};
