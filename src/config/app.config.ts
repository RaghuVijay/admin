import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
  userUrl: process.env.AXIOS_PARKING_USER_MANAGEMENT_HOST,
}));
