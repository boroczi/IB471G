import {Role} from './user.interface';

export interface INavItem {
  label: string;
  role?: Role;
  routerLink?: string;
  click?: () => void;
  mobileOnly?: boolean;
  isLogout?: boolean;
  icon?: string;
}
