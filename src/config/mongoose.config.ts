import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const mongooseConfig = (configService: ConfigService): MongooseModuleOptions => ({
  uri: configService.get<string>('database.uri'),
  auth: {
    username: configService.get<string>('database.user'),
    password: configService.get<string>('database.pass')
  },
  authSource: configService.get<string>('database.dbName')
});