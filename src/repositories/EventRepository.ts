import { Event } from '../entities/Event';

export interface EventRepository {
  add(event: Event): Promise<Event>
}