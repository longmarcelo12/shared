import 'reflect-metadata';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { types } from 'pg';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

export const databaseConfig = {
  type: 'postgres',
  url: process.env.DATABASE_POSTGRES_URL,
  schema: process.env.DATABASE_POSTGRES_SCHEMA,
  host: process.env.DATABASE_POSTGRES_HOST,
  port: parseInt(process.env.DATABASE_POSTGRES_PORT),
  username: process.env.DATABASE_POSTGRES_USERNAME,
  password: process.env.DATABASE_POSTGRES_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
  logging: process.env.DATABASE_POSTGRES_LOGGING === 'true',
  maxPool: parseInt(process.env.DATABASE_MAX_POOL) || 20,
  namingStrategy: new SnakeNamingStrategy(),
};

types.setTypeParser(types.builtins.INT8, (value: string): number =>
  parseFloat(value),
);
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  // constructor(private configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: databaseConfig.type,
      schema: databaseConfig.schema,
      url: databaseConfig.url,
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.databaseName,
      synchronize: false,
      dropSchema: false,
      keepConnectionAlive: true,
      logging: databaseConfig.logging,
      entities: [path.join(__dirname, '../entities/*.entity.{ts,js}')],
      migrations: [path.join(__dirname, '../databases/migrations/*.{ts,js}')],
      cli: {
        entitiesDir: 'src',
        subscribersDir: 'subscriber',
      },
      extra: {
        max: databaseConfig.maxPool,
      },
    } as TypeOrmModuleOptions;
  }
}

const dataSourceOptions = new DataSource({
  type: 'postgres',
  schema: databaseConfig.schema,
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.databaseName,
  synchronize: false,
  entities: [path.join(__dirname, '../entities/*.entity.{ts,js}')],
  migrations: [path.join(__dirname, '../migrations/*.{ts,js}')],
  migrationsRun: false,
  logging: databaseConfig.logging,
  extra: {
    max: databaseConfig.maxPool,
  },
  namingStrategy: new SnakeNamingStrategy(),
});

types.setTypeParser(types.builtins.INT8, (value: string): number =>
  parseFloat(value),
);

export default dataSourceOptions;
