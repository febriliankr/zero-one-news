import { FastifyReply, FastifyRequest } from 'fastify';
import {
  CreateArticleRequest,
  GetArticleByIDRequest,
  GetArticleListRequest,
} from '../../../entity/article';
import repo from '../../../repo/repo';
import { getPagination } from './request';
import {
  CreateArticleHandlerFastifyRequest,
  GetArticleByIDFastifyRequest,
} from './types';

const ArticleService = {
  GetArticleByIDHandler,
  GetArticleListHandler,
  CreateArticleHandler,
};

async function GetArticleByIDHandler(
  req: GetArticleByIDFastifyRequest,
  reply: FastifyReply
) {
  await req.server.pg.connect(onConnect);

  const input: GetArticleByIDRequest = {
    article_id: req.params.article_id,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.GetArticleByID(client, input);
      const { data, error } = repoRes;
      if (error) return reply.send(error);
      return reply.send(data);
    } catch (err) {
      reply.send(err);
    } finally {
      client.release();
    }
  }
}

async function GetArticleListHandler(req, reply: FastifyReply) {
  await req.server.pg.connect(onConnect);

  const pagination = getPagination(req);
  const input: GetArticleListRequest = {
    ...pagination,
    title: req.query.title || '',
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.GetArticleList(client, input);

      const { data, error } = repoRes;
      if (error) return reply.send(error);
      return reply.send(data);
    } catch (err) {
      reply.send(err);
    } finally {
      client.release();
    }
  }
}

async function CreateArticleHandler(
  req: CreateArticleHandlerFastifyRequest,
  reply: FastifyReply
) {
  await req.server.pg.connect(onConnect);

  const input: CreateArticleRequest = {
    title: req.body.title,
    content_plain: req.body.content_plain,
    content_html: req.body.content_html,
    slug: req.body.slug,
    author: req.body.author,
    published: req.body.published,
    excerpt: req.body.excerpt,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.CreateArticle(client, input);

      const { data, error } = repoRes;
      if (error) return reply.send(error);
      return reply.send(data);
    } catch (err) {
      reply.send(err);
    } finally {
      client.release();
    }
  }
}

export default ArticleService;
