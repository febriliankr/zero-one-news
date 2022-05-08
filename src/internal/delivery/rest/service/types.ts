import { FastifyRequest } from 'fastify';
import {
  CreateArticleRequest,
  GetArticleByIDRequest,
} from '../../../entity/article';

export interface GlobalFastifyRequest extends FastifyRequest {
  server: any;
}
export interface CreateArticleHandlerFastifyRequest
  extends GlobalFastifyRequest {
  body: CreateArticleRequest;
}
export interface GetArticleByIDFastifyRequest extends GlobalFastifyRequest {
  params: GetArticleByIDRequest;
}
