import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { LogLevelEnum } from '../log.enum';

export class LogRequestDto {
  @Expose({ name: 'request_id' })
  requestId: string;

  @Expose({ name: 'service_name' })
  serviceName?: string;

  metadata: string;

  @IsEnum(LogLevelEnum)
  level?: string;
}
