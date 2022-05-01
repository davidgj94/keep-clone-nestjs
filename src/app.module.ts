import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabelsModule } from './labels/labels.module';
import { NotesModule } from './notes/notes.module';
import config from './config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LabelsModule,
    NotesModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
