import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class TestModel extends Document {
    @Prop({ required: true, unique: true })
    readonly name: string;
    @Prop({ required: true })
    readonly email: string;
}
export const TestSchema = SchemaFactory.createForClass(TestModel)