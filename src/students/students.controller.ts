import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentsService.create(createStudentDto);
  }

  @Get('/')
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.studentsService.findOne(+id);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return await this.studentsService.update(+id, updateStudentDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.studentsService.remove(+id);
  }
}
