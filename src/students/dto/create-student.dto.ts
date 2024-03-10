import { IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty({ message: 'Student should have a name' })
  @Length(3, 255, { message: 'Minimum length 3 and maximum length 255' })
  name: string;

  @Length(3)
  department: string;

  @IsOptional()
  @IsNumber()
  cgpa?: number;
}
