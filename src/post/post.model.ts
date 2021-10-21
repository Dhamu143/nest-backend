import {IsInt} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class receiveMessageDTO{
  @ApiProperty()
  @IsInt()
  id: number;
}
