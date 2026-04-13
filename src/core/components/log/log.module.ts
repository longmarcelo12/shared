import { Global, Module } from '@nestjs/common';
import { KafkaModule } from '@core/components/kafka/kafka.module';
import { LogService } from './log.service';

@Global()
@Module({
  imports: [KafkaModule],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
