import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class YourModel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const YourModelSchema = SchemaFactory.createForClass(YourModel);
