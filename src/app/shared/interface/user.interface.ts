export type Role = 'admin' | 'user';

export interface IUser {
  id: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}
