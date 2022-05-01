import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabelsModule } from './labels/labels.module';
import { NotesModule } from './notes/notes.module';
import configurationLoader, { AppConfiguration } from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LabelsModule,
    NotesModule,
    ConfigModule.forRoot({ load: [configurationLoader], isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService<AppConfiguration>) => ({
        uri: config.get('databaseUrl', { infer: true }),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
