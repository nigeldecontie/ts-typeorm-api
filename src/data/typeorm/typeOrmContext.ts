import { injectable } from 'inversify';
import { DataSource, DataSourceOptions, EntitySchema } from 'typeorm';

import { DatabaseContext } from '@data/lib/abstractDatabaseContext';

@injectable()
export class TypeOrmDatabaseContext extends DatabaseContext {
  constructor() {
    super();
  }

  async connect(options: DataSourceOptions) {
    this.connection = new DataSource(options);
    await this.connection.initialize();
    console.log('connected to DB');
  }

  public getConnection() {
    return this.connection;
  }

  // get User() {
  //   return this.connection.model<IUser>('User', UsersModel);
  // }
}
