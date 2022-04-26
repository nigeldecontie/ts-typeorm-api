export class GetOneUserDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<GetOneUserDto>) {
    if (!body.id) {
      throw new Error('missing id property');
    }

    return new GetOneUserDto(body.id);
  }
}
