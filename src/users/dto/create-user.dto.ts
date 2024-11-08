import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Engineer', 'Admin'], {
    message: 'Invalid Role Input.',
  })
  role: 'Intern' | 'Engineer' | 'Admin';
}
