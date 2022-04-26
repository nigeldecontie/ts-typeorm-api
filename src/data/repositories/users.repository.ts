import { injectable } from 'inversify';
import { IUser } from '../users.model';
import { Repository } from 'typeorm';
import { DatabaseContext } from '../lib/abstractDatabaseContext';
import { TypeOrmDatabaseContext } from '../typeorm/typeOrmContext';
import { User } from '../entities/user.entity';

@injectable()
export class UsersRepository {
  private user;
  constructor(private readonly userRepository: TypeOrmDatabaseContext) {
    this.user = userRepository.getConnection().getRepository(User);
  }

  async all() {
    return await this.user.find();
  }

  async findOne(id: IUser['_id']) {
    return {};
  }

  async create(entity: Partial<IUser>) {
    return {};
  }

  async updateOne(payload: Partial<IUser>) {
    return {};
  }

  async deleteOne(id: string) {
    return {};
  }
}
