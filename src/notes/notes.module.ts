import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import NotesSchema from './db/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notes', schema: NotesSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
