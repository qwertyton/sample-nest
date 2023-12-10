import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModel, TestSchema } from './schemas/test.schema';

@Module({
  imports:[MongooseModule.forFeature([
    { name: TestModel.name, schema: TestSchema },
  ])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
