import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
// import morgan from 'morgan';

import {
  Application,
  AbstractApplicationOptions,
  MorganMode,
} from '@web/lib/abstractApplication';
import {
  CouldNotFindUserException,
  ValidationException,
} from '@logic/exceptions';
import { TypeOrmDatabaseContext } from '@data/typeorm/typeOrmContext';
import { UsersRepository } from '@data/users.repository';
import { UsersService } from '@logic/services/users.service';
import { BaseHttpResponse } from './lib/base-http-response';

import defaultConfig from '@data/typeorm/ormconfig.default';
import '@web/controllers/users.controller';

export class App extends Application {
  constructor() {
    super({
      containerOpts: {
        defaultScope: 'Singleton',
      },
      morgan: {
        mode: MorganMode.DEV,
      },
    });
  }

  configureServices(container: Container): void {
    container.bind(TypeOrmDatabaseContext).toSelf();
    container.bind(UsersRepository).toSelf();
    container.bind(UsersService).toSelf();
  }

  async setup(options: AbstractApplicationOptions) {
    const _db = this.container.get(TypeOrmDatabaseContext);

    await _db.connect(defaultConfig);

    const server = new InversifyExpressServer(this.container);

    // server.setErrorConfig((app) => {
    //   app.use((err, req, res, next) => {
    //     if (err instanceof ValidationException) {
    //       // NOTE: Fixed this after the video, should 've been 422!
    //       const response = BaseHttpResponse.failed(err.message, 422);
    //       return res.status(response.statusCode).json(response);
    //     }

    //     if (err instanceof CouldNotFindUserException) {
    //       const response = BaseHttpResponse.failed(err.message, 404);
    //       return res.status(response.statusCode).json(response);
    //     }

    //     if (err instanceof Error) {
    //       const response = BaseHttpResponse.failed(err.message, 500);
    //       return res.status(response.statusCode).json(response);
    //     }

    //     next();
    //   });
    // });

    // server.setConfig((app) => {
    //   app.use(express.json());
    //   app.use(morgan(options.morgan.mode));
    // });

    const app = server.build();

    app.listen(process.env.PORT, () => {
      console.log(
        `server is running on http://localhost:${process.env.PORT}/users`
      );
    });
  }
}
