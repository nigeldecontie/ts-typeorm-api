import { injectable } from 'inversify';
import { UsersRepository } from '@data/users.repository';
import {
  CreateUserDto,
  GetOneUserDto,
  UserDto,
  UpdateUserDto,
} from '@logic/dtos';
import { CouldNotFindUserException } from '@logic/exceptions';

@injectable()
export class UsersService {
  constructor(private readonly _usersRepo: UsersRepository) {}

  async all() {
    const users = await this._usersRepo.all();
    return users;
    console.log(users);
    return UserDto.fromMany(users);
  }

  // async findOne(getOneUserDto: GetOneUserDto) {
  //   const foundUser = await this._usersRepo.findOne(getOneUserDto.id);

  //   if (!foundUser) {
  //     throw new CouldNotFindUserException();
  //   }

  //   return UserDto.from(foundUser);
  // }

  // async create(createUserDto: CreateUserDto) {
  //   const createdUser = await this._usersRepo.create(createUserDto);
  //   return UserDto.from(createdUser);
  // }

  async updateOne(updateUserDto: UpdateUserDto) {
    // TODO: Implement proper mapping?
    return this._usersRepo.updateOne({
      _id: updateUserDto.id,
      channel: updateUserDto.channel,
      name: updateUserDto.name,
    });
  }

  async deleteOne({ id }: GetOneUserDto) {
    await this._usersRepo.deleteOne(id);

    return true;
  }
}
