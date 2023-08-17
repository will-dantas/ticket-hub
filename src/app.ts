import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middlewares';
import { EventRouter } from './routes/event.routes';

export class App {
  public app: Application;
  private eventRouter = new EventRouter();
  constructor() {
    this.app = express();
    this.middlewaresInitalize();
    this.initalizeRoutes();
    this.interceptionError();
    connect();
  }
  // 01:15
  initalizeRoutes() {
    this.app.use('/events', this.eventRouter.router);
  }

  interceptionError() {
    this.app.use(errorMiddleware);
  }

  middlewaresInitalize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(3333, () => console.log('server is running'));
  }
}



