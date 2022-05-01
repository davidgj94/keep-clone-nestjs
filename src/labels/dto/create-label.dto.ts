import { IsString } from 'class-validator';
import { Label } from '../entities/label.entity';

export class CreateLabelDto implements Omit<Label, 'id'> {
  @IsString()
  name: string;
}
