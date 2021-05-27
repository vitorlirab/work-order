import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () =>
  <TypeOrmModuleOptions>{
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
  };
