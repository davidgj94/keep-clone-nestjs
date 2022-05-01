import { IsString } from 'class-validator';
import { Label } from '../entities/label.entity';

export class UpdateLabelDto implements Label {
  @IsString()
  id: string;

  @IsString()
  name: string;
}
