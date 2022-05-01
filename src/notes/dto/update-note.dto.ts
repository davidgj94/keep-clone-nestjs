import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsBoolean, IsString } from 'class-validator';
import { Note } from '../entities/note.entity';

class UpdateNoteFields
  implements Omit<Note, 'id' | 'updatedAt' | 'createdAt' | 'empty'>
{
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsArray({ each: true })
  labels: string[];

  @IsBoolean()
  archived: boolean;
}

export class UpdateNoteDto extends PartialType(UpdateNoteFields) {
  @IsString()
  id: string;
}
