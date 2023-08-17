import { Event } from '../entities/Event';
import { EventRepository } from '../repositories/EventRepository';

export class EventUseCase {
  constructor(
    private eventRepository: EventRepository
  ){
  }

  async create(eventData: Event) {
    const result = await this.eventRepository.add(eventData);

    return result;
  }
}