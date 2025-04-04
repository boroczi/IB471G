export type Role = 'admin' | 'user';

export interface IUser {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}
