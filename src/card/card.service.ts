import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto.js';
import { UpdateCardDto } from './dto/update-card.dto.js';

export interface Card {
  id: number;
  title: string;
  list_id: number;
  position: number;
  description?: string;
  custom?: Record<string, any>;
}

@Injectable()
export class CardService {
  private cards: Card[] = [];
  private idCounter = 1;

  create(createCardDto: CreateCardDto): number {
    const newCard: Card = {
      id: this.idCounter++,
      title: createCardDto.title,
      list_id: createCardDto.list_id,
      position: createCardDto.position,
      description: createCardDto.description
        ? String(createCardDto.description)
        : undefined,
      custom: createCardDto.custom,
    };
    this.cards.push(newCard);
    return newCard.id;
  }

  findAll(): Card[] {
    return this.cards;
  }

  findOne(id: number): Card {
    const card = this.cards.find((c) => c.id === id);
    if (!card) {
      throw new NotFoundException(`Card not found`);
    }
    return card;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    const card = this.findOne(id);
    card.title = updateCardDto.title ?? card.title;
    card.list_id = updateCardDto.list_id ?? card.list_id;
    card.position = updateCardDto.position ?? card.position;
    card.description = updateCardDto.description ?? card.description;
    card.custom = updateCardDto.custom ?? card.custom;
    return true;
  }

  remove(id: number) {
    this.findOne(id);
    this.cards = this.cards.filter((card) => card.id !== id);
    return true;
  }
}
