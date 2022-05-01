import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsString } from 'class-validator';
import { Note } from '../entities/note.entity';

class CreateNoteFields
  implements
    Omit<Note, 'id' | 'updatedAt' | 'createdAt' | 'empty' | 'archived'>
{
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsArray({ each: true })
  labels: string[];
}

export class CreateNoteDto extends PartialType(CreateNoteFields) {}
