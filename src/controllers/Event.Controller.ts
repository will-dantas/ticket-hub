import { NextFunction, Request, Response } from 'express';
import { EventUseCase } from '../useCases/EventUseCase';

export class EventController {
  constructor(
    private eventUseCase: EventUseCase
  ) {
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const eventData = request.body;
    try {
      await this.eventUseCase.create(eventData);

      return response.status(201).json({message: 'Event was successfully created'});
    } catch (error) {
      next(error);
    }
  }
}