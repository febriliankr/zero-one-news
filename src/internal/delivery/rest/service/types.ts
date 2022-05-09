import { FastifyRequest } from 'fastify';
import {
  CreateArticleRequest,
  GetArticleBySlugRequest,
  GetArticleListRequest,
} from '../../../entity/article';

export interface GlobalFastifyRequest extends FastifyRequest {
  server: any;
}
export interface CreateArticleHandlerFastifyRequest
  extends GlobalFastifyRequest {
  body: CreateArticleRequest;
}
export interface GetArticleBySlugFastifyRequest extends GlobalFastifyRequest {
  params: GetArticleBySlugRequest;
}
export interface GetArticleListFastifyRequest extends GlobalFastifyRequest {
  query: GetArticleListRequest;
}
