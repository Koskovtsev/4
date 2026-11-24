import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({
    description: `Ім'я персонажа`,
    type: String,
    example: `Luke Skywalker`,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: `Зріст персонажа в см`,
    type: Number,
    example: 182,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @ApiProperty({
    description: `Вага персонажа в кг`,
    type: Number,
    example: 77,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  mass: number;

  @ApiProperty({
    description: `Колір волосся персонажа`,
    type: String,
    example: `Black`,
  })
  @IsNotEmpty()
  @IsString()
  hair_color: string;

  @ApiProperty({
    description: `Колір шкіри персонажа`,
    type: String,
    example: `fair`,
  })
  @IsNotEmpty()
  @IsString()
  skin_color: string;

  @ApiProperty({
    description: `Колір очей персонажа`,
    type: String,
    example: `blue-gray`,
  })
  @IsNotEmpty()
  @IsString()
  eye_color: string;

  @ApiProperty({
    description: `Рік народження персонажа`,
    type: String,
    example: `57BBY`,
  })
  @IsNotEmpty()
  @IsString()
  birth_year: string;

  @ApiProperty({
    description: `Стать персонажа`,
    type: String,
    example: `male`,
  })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({
    description: `Планета походження персонажа`,
    type: String,
    example: `https://localhost:3000/api/planets/20/`,
  })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      message: 'homeworld має бути валідним http/https URL',
    },
  )
  @IsNotEmpty()
  @IsString()
  homeworld: string;

  @IsArray({ message: 'films має бути масивом' })
  @ArrayMaxSize(20, { message: 'Максимум 20 посилань у масиві' })
  @ArrayUnique({ message: 'Посилання у масиві не повинні дублюватися' })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      each: true,
      message: 'Кожен елемент films має бути валідним http/https URL',
    },
  )
  films: string[];

  @IsOptional()
  @IsArray({ message: 'starships має бути масивом' })
  @ArrayMaxSize(20, { message: 'Максимум 20 посилань у масиві' })
  @ArrayUnique({ message: 'Посилання у масиві не повинні дублюватися' })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      each: true,
      message: 'Кожен елемент species має бути валідним http/https URL',
    },
  )
  species?: string[];

  @IsOptional()
  @IsArray({ message: 'starships має бути масивом' })
  @ArrayMaxSize(20, { message: 'Максимум 20 посилань у масиві' })
  @ArrayUnique({ message: 'Посилання у масиві не повинні дублюватися' })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      each: true,
      message: 'Кожен елемент vehicles має бути валідним http/https URL',
    },
  )
  vehicles?: string[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Додаткові URL транспорту',
    type: [String],
    example: ['/api/vehicles/14/'],
  })
  @IsOptional()
  @IsArray({ message: 'starships має бути масивом' })
  @ArrayMaxSize(20, { message: 'Максимум 20 посилань у масиві' })
  @ArrayUnique({ message: 'Посилання у масиві не повинні дублюватися' })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      each: true,
      message: 'Кожен елемент starships має бути валідним http/https URL',
    },
  )
  starships?: string[];

  @ApiProperty({
    description: `Посилання на сторінку персонажа`,
    type: String,
    example: `http://localhost:3000/api/people/1/`,
  })
  @IsUrl(
    {
      protocols: ['http', 'https'],
      require_protocol: true,
      require_tld: false,
    },
    {
      message: 'url має бути валідним http/https URL',
    },
  )
  url: string;
}
