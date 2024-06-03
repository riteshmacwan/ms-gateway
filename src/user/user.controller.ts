import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  /**
   * Api to check the connection with user microservice
   *
   * @returns
   */
  @Get()
  user() {
    return this.userClient.send(
      'user.test.connection',
      JSON.stringify({ name: 'abc' }),
    );
  }
}
