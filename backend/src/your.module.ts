import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { YourModel, YourModelSchema } from './your.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: YourModel.name, schema: YourModelSchema }])],
  controllers: [],
  providers: [],
})

export class YourModule {}
