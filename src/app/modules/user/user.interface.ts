import type { Model } from 'mongoose';

import type { USER_ROLES } from '@/enums/user.js';

export interface IUser {
  id: string;
  name: string;
  email: string;
  username: string;
  role: USER_ROLES;
}

// Define separate types only if needed
export interface UserMethods {
  isAdmin(): boolean;
}

export type UserModel = Model<IUser, {}, UserMethods>;

export interface IUserSearchAndFilterFields {
  searchTerm?: string;
  role?: string;
  status?: string;
}
