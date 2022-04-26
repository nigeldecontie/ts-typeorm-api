import { injectable } from 'inversify';

@injectable()
export abstract class DatabaseContext {
  protected connection: any;
  async connect(options: any) {}
}
