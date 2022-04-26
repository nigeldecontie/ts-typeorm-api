import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
  httpDelete,
} from 'inversify-express-utils';
import { UsersService } from '@logic/services/users.service';
import { CreateUserDto, GetOneUserDto, UpdateUserDto } from '@logic/dtos';
import { ValidateRequestMiddleware } from '@web/middlewares/validate-request.middleware';
import { BaseHttpResponse } from '@web/lib/base-http-response';

@controller('/users')
export class UsersController {
  constructor(private readonly _service: UsersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const users = await this._service.all();

    const response = BaseHttpResponse.success(users);
    res.json(response);
  }

  // @httpGet('/:id', ValidateRequestMiddleware.withParams(GetOneUserDto))
  // async show(req: Request, res: Response) {
  //   const user = await this._service.findOne(req.body);

  //   const response = BaseHttpResponse.success(user);
  //   res.json(response);
  // }

  // @httpPost('/', ValidateRequestMiddleware.with(CreateUserDto))
  // async store(req: Request, res: Response) {
  //   const user = await this._service.create(req.body);

  //   const response = BaseHttpResponse.success(user, 201);
  //   res.status(response.statusCode).json(response);
  // }

  @httpPatch('/:id', ValidateRequestMiddleware.withParams(UpdateUserDto))
  async update(req: Request, res: Response) {
    await this._service.updateOne(req.body);

    const response = BaseHttpResponse.success({}, 200);

    res.status(response.statusCode).json(response);
  }

  @httpDelete('/:id', ValidateRequestMiddleware.withParams(GetOneUserDto))
  async destroy(req: Request, res: Response) {
    await this._service.deleteOne(req.body);

    const response = BaseHttpResponse.success({}, 200);

    res.status(response.statusCode).json(response);
  }
}
