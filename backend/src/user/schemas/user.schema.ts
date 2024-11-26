import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongooseSequence from 'mongoose-sequence'; // Auto-increment plugin
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true }) // Auto-incremented ID
  id: number;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: 'user' })
  rank: string;

  @Prop({ default: false })
  authenticated: boolean;
}

// Create the schema
export const UserSchema = SchemaFactory.createForClass(User);

// Add the auto-increment plugin
UserSchema.plugin(mongooseSequence(mongoose), { inc_field: 'id' });
