export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  TESTER = 'TESTER'
}


export interface User {
  id: string;
  username: string;
  avatar?: string;
  role?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
