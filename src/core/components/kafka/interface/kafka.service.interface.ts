import { CompressionTypes, Message } from 'kafkajs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IKafkaService {
  sendTopic(
    topic: string,
    messages: Message[],
    acks?: number,
    timeout?: number,
    compression?: CompressionTypes,
  );
}
