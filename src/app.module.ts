import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabelsModule } from './labels/labels.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [LabelsModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
