import { DataSourceOptions } from 'typeorm';

import { User } from '@data/entities/user.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [User],
  // Users: [],
  // cli: {
  //   // entitiesDir: 'src/typeorm/entities',
  //   // UsersDir: 'src/typeorm/Users',
  // },
};

export = config;
