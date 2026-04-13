import { Inject, Injectable, Logger } from '@nestjs/common';
import { IKafkaService } from './interface/kafka.service.interface';
import { CompressionTypes, Producer, RecordMetadata } from 'kafkajs';

@Injectable()
export class KafkaService implements IKafkaService {
  private logger = new Logger(KafkaService.name);

  constructor(
    @Inject('KAFKA_PRODUCER')
    private readonly kafkaClient: Producer,
  ) {}

  async sendTopic(
    topicName: string,
    messages: any[],
    acks?: number,
    timeout?: number,
    compression?: CompressionTypes,
  ): Promise<RecordMetadata[]> {
    try {
      return await this.kafkaClient.send({
        topic: topicName,
        messages,
        acks,
        timeout,
        compression,
      });
    } catch (err) {
      this.logger.error(`kafka_service.sendTopic Err:: ${JSON.stringify(err)}`);
      return [];
    }
  }
}
