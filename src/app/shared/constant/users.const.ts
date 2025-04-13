import {IUser} from '../interface/user.interface';

export const users: IUser[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  },
  {
    id: 2,
    username: 'johndoe',
    password: 'password123',
    email: 'johndoe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'user'
  },
  {
    id: 3,
    username: 'janedoe',
    password: 'password456',
    email: 'janedoe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'user'
  }
];
