import { Global, Module } from '@nestjs/common';
import {
  ClientKafka,
  ClientProviderOptions,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: '0x2af18c-5da6-4b5e-99b1-0c1751dcbd9k',
            brokers: process?.env?.KAFKA_BROKERS?.split(',') || ['kafka:9092'],
            sasl: {
              mechanism: 'plain',
              username: process?.env?.KAFKA_SASL_USERNAME || 'admin',
              password: process?.env?.KAFKA_SASL_PASSWORD || 'admin',
            },
          },
          producerOnlyMode: true,
        },
      } as ClientProviderOptions,
    ]),
  ],
  providers: [
    {
      provide: 'IKafkaService',
      useClass: KafkaService,
    },
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaClient: ClientKafka) => {
        return await kafkaClient.connect();
      },
      inject: ['AUTH_SERVICE'],
    },
  ],
  exports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: '0x2af18c-5da6-4b5e-99b1-0c1751dcbd9k',
            brokers: process?.env?.KAFKA_BROKERS?.split(',') || ['kafka:9092'],
            sasl: {
              mechanism: 'plain',
              username: process?.env?.KAFKA_SASL_USERNAME || 'admin',
              password: process?.env?.KAFKA_SASL_PASSWORD || 'admin',
            },
          },
          producerOnlyMode: true,
        },
      } as ClientProviderOptions,
    ]),
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaClient: ClientKafka) => {
        return await kafkaClient.connect();
      },
      inject: ['AUTH_SERVICE'],
    },
    {
      provide: 'IKafkaService',
      useClass: KafkaService,
    },
  ],
})
export class KafkaModule {}
