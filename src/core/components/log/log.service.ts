import { Inject } from '@nestjs/common';
import { IKafkaService } from '../kafka/interface/kafka.service.interface';
import { LogRequestDto } from './dto/log.request.dto';
import { LogLevelEnum } from './log.enum';
import { TOPIC_KAFKA } from '@core/components/kafka/kafka.contant';
import { ConfigService } from '@nestjs/config';

export class LogService {
  constructor(
    @Inject('IKafkaService')
    private readonly kafkaService: IKafkaService,
    private readonly configService: ConfigService,
  ) {}

  async sendLog(data: LogRequestDto) {
    if (!data?.serviceName) {
      data.serviceName = this.configService.get('SERVICE_NAME');
    }
    if (!data?.level) {
      data.level = LogLevelEnum.INFO;
    }
    await this.kafkaService.sendTopic(TOPIC_KAFKA.DE_SEND_LOG, [
      {
        key: 'data',
        value: JSON.stringify(data),
      },
    ]);
  }
}
