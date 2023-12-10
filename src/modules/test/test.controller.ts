import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './dto/test.dto';
import { TestModel } from './schemas/test.schema';
import { MongoExceptionFilter } from 'src/filters/mongo-exception/mongo-exception.filter';


@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() testDto: TestDto): Promise<TestModel | Response> {
    return this.testService.create(testDto);
  }

  @Get()
  findAll(): Promise<TestModel[] | Response> {
    return this.testService.findAll();
  }

  @Get('name/:name')
  findByname(@Param('name') name: string) {
    return this.testService.findByname(name);
  }

  @Patch('name/:name')
  update(@Param('name') name: string, @Body() testDto: TestDto): Promise<any> {
    return this.testService.update(name, testDto);
  }

  @Delete('name/:name')
  remove(@Param('name') name: string) {
    return this.testService.remove(name);
  }
}
