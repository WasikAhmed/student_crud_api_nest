import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from '../students/entities/student.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'password',
  database: 'student_db',
  entities: [Student],
  synchronize: true,
};
