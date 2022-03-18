import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/model/user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  public validateUser(
    username: string,
    password: string
  ): Pick<User, 'userId' | 'username'> {
    const user = this.userService.findUser(username);
    if (user && user.password === password) {
      return { userId: user.userId, username: user.username };
    }
    return null;
  }
}
