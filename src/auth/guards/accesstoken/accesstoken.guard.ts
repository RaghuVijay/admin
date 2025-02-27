import { HttpService } from '@nestjs/axios';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { REQUEST_USER_KEY } from 'src/auth/constsants/auth.constants';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Extract the request from the execution context
    const request = context.switchToHttp().getRequest();

    // Extract the token from the header
    console.log('here in access guard');
    const token = request.headers.authorization;
    console.log(token);

    const userUrl = this.configService.get('appConfig.userUrl');
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      // Make the Axios call
      const response = await firstValueFrom(
        this.httpService.get(`${userUrl}/auth/validate`, {
          headers: {
            Authorization: token,
          },
        }),
      );

      console.log('After Axios request');
      console.log('Response:', response.data); // Log the response data
      request[REQUEST_USER_KEY] = response.data; // Attach the user data to the request
    } catch (error) {
      console.error(
        'Error during Axios request',
        error.response ? error.response.data : error.message,
      );
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
