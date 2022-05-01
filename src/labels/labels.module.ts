import { Module } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { LabelsController } from './labels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import LabelsModelDefinition from './db/schema';

@Module({
  imports: [MongooseModule.forFeature([LabelsModelDefinition])],
  controllers: [LabelsController],
  providers: [LabelsService],
})
export class LabelsModule {}
