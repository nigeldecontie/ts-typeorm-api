import { ValidationException } from '@logic/exceptions';

export class CreateUserDto {
  constructor(public readonly name: string, public readonly channel: string) {}

  static from(body: Partial<CreateUserDto>) {
    if (!body.channel) {
      throw new ValidationException('Missing property channel');
    }

    if (!body.name) {
      throw new ValidationException('Missing property name');
    }

    return new CreateUserDto(body.name, body.channel);
  }
}
