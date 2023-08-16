import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middlewares';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middlewaresInitalize();
    this.initalizeRoutes();
    this.interceptionError();
    connect();
  }
  // 36:44
  initalizeRoutes() {
    // this.app.use('/, )
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

export { App };



