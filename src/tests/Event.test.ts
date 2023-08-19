import request from 'supertest';
import { App } from '../app';
import { event } from './Event.fixture';

const app = new App();
const express = app.app;

describe('Event - unit test', () => {
  it('/POST event', async () => {
    const response = await request(express)
      .post('/events')
      .field('title', event.title)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .field('description', event.description)
      .field('city', event.city)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude);

    if (response.error) {
      console.log('Error', response.error);
    }

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Event was successfully created' });
  });
});