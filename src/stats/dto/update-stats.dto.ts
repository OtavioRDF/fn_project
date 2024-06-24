import { PartialType } from '@nestjs/swagger';
import { CreateStatDto } from './create-stats.dto';

export class UpdateStatDto extends PartialType(CreateStatDto) {}
