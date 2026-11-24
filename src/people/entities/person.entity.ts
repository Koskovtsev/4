import { CreatePersonDto } from '../dto/create-person.dto.js';

export class Person extends CreatePersonDto {
  //   @ApiProperty({ example: 1 })
  id: number;

  //   @ApiProperty({ example: '2026-11-24T11:25:00.000Z' })
  created: number;

  //   @ApiProperty({ example: '2026-11-24T11:25:00.000Z' })
  edited: number;
}
