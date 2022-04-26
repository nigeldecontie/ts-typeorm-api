export class UpdateUserDto {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly channel?: string
  ) {}

  static from(body: Partial<UpdateUserDto>) {
    if (!body.id) {
      throw new Error('missing id property');
    }

    return new UpdateUserDto(body.id, body.name, body.channel);
  }
}
