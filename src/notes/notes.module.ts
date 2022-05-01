import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import NotesModelDefinition from './db/schema';

@Module({
  imports: [MongooseModule.forFeature([NotesModelDefinition])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
