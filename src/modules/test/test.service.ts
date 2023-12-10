import { Injectable, ConflictException } from '@nestjs/common';
import { TestDto } from './dto/test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TestModel } from './schemas/test.schema';
import { Model, Error as MongoError, MongooseError } from 'mongoose';


@Injectable()
export class TestService {
  constructor(@InjectModel(TestModel.name) private testModel: Model<TestModel>) { }
  async create(testDto: TestDto): Promise<TestModel> {
    try {
      const testData = new this.testModel(testDto)
      return await this.testModel.create(testData)
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<TestModel[]> {
    return await this.testModel.find();;
  }

  async findByname(name: string): Promise<TestModel[]> {
    const testData = await this.testModel.find({ name: name })
    return testData;
  }

  async update(name: string, data: TestDto): Promise<any> {
    try {
      return await this.testModel.updateOne(
        { name: name },
        { $set: { name: data.name, email: data.email } }
      );
    } catch (error) {
      throw error;
    }
  }

  async remove(name: string): Promise<any> {
    return await this.testModel.deleteMany({ name: name })
  }
}
