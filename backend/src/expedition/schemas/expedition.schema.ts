import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Expedition extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  members: string;

  @Prop({ required: true })
  route: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;
}

export const ExpeditionSchema = SchemaFactory.createForClass(Expedition);