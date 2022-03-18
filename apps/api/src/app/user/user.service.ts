import { Injectable } from '@nestjs/common';
import { User } from './model/user';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { userId: 1, username: 'admin', password: 'admin' },
    { userId: 2, username: 'user', password: 'user' },
  ];

  findUser(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
