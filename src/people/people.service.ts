import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto.js';
import { UpdatePersonDto } from './dto/update-person.dto.js';
import { Person } from './entities/person.entity.js';

@Injectable()
export class PeopleService {
  people: Person[] = [];
  personId: number = 0;

  create(createPersonDto: CreatePersonDto) {
    this.personId++;
    const now = new Date().getTime();
    const person = {
      id: this.personId,
      ...createPersonDto,
      created: now,
      edited: now,
    };
    this.people.push(person);
    return person.id;
  }

  findAll(): Person[] {
    return this.people;
  }

  findOne(id: number): Person {
    const person = this.people.find((pers) => pers.id === id);
    if (person === undefined)
      throw new NotFoundException(`Person with id ${id} not found`);

    return person;
  }

  update(id: number, updatePersonDto: UpdatePersonDto): Person {
    const person = this.findOne(id);
    const now = new Date().getTime();
    Object.assign(person, updatePersonDto, { edited: now });
    return person;
  }

  remove(id: number): boolean {
    this.findOne(id);
    this.people = this.people.filter((person) => person.id !== id);
    return true;
  }
}
