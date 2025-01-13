import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Expedition extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  members: string;

  @Prop({ type: Types.ObjectId, ref: 'Route', required: true })
  route: Types.ObjectId;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop()
  image: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Like' }] })
  likes: Types.ObjectId[];
}

export const ExpeditionSchema = SchemaFactory.createForClass(Expedition);