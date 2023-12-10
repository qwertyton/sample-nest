import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { CustomConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './config/mongoose.config';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: mongooseConfig,
      inject: [ConfigService],
    }),
    TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
