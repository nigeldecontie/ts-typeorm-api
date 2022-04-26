import { IUser } from '@data/users.model';

export class UserDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly channel: string,
    public readonly createdAt: Date
  ) {}

  static from(entity: IUser) {
    return new UserDto(
      entity._id,
      entity.name,
      entity.channel,
      entity.createdAt
    );
  }

  static fromMany(users: IUser[]) {
    return users.map((user) => UserDto.from(user));
  }
}
