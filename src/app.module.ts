import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
