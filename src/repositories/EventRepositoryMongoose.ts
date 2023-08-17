import mongoose from 'mongoose';
import { Event } from '../entities/Event';

const eventSchema = new mongoose.Schema({
  title: String,
  location: {
    latitude: String,
    longitude: String
  },
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  description: String,
  categories: [String],
  banner: String,
  flyers: [String],
  coupons:[String],
  price: {
    type: Array
  },
  city: String,
  participants: {
    type: Array,
    ref: 'User'
  }
});

const EventModel = mongoose.model('Event', eventSchema);

export class EventRepositoryMongoose{
  async add(event: Event): Promise<Event> {
    const eventModel = new EventModel(event);
    await eventModel.save();

    return event;
  }
}