import { Router } from 'express';
import { EventRepositoryMongoose } from '../repositories/EventRepositoryMongoose';
import { EventUseCase } from '../useCases/EventUseCase';
import { EventController } from '../controllers/Event.Controller';
import { upload } from '../infra/multer';

export class EventRouter {
  public router: Router;
  private eventController: EventController;
  constructor() {
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventController = new EventController(eventUseCase);
    this.initiRouter();
  }

  initiRouter() {
    this.router.post(
      '/',
      upload.fields([
        {
          name: 'banner',
          maxCount: 1
        },
        {
          name: 'flyers',
          maxCount: 3
        }
      ]),
      this.eventController.create.bind(this.eventController));
  }
}