import { FastifyReply, FastifyRequest } from 'fastify';
import {
  CreateArticleRequest,
  DeleteArticleRequest,
  GetArticleBySlugRequest,
  GetArticleListRequest,
  UpdateArticleRequest,
} from '../../../entity/article';
import repo from '../../../repo/repo';
import { getPagination } from './request';
import { SendOK } from './response';
import {
  CreateArticleHandlerFastifyRequest,
  GetArticleBySlugFastifyRequest,
} from './types';

const ArticleService = {
  GetArticleBySlugHandler,
  GetArticleListHandler,
  CreateArticleHandler,
  UpdateArticleHandler,
  DeleteArticleHandler,
};

async function GetArticleBySlugHandler(
  req: GetArticleBySlugFastifyRequest,
  reply: FastifyReply
) {
  await req.server.pg.connect(onConnect);

  const input: GetArticleBySlugRequest = {
    slug: req.params.slug,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.GetArticleBySlug(client, input);
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
    published: req.query.draft === 'true' ? false : true,
    hidden: req.query.hidden === 'true' ? true : false,
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
    article_topics: req.body.article_topics,
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

async function UpdateArticleHandler(req: any, reply: FastifyReply) {
  await req.server.pg.connect(onConnect);

  const input: UpdateArticleRequest = {
    article_id: req.params.article_id,
    title: req.body.title,
    content_plain: req.body.content_plain,
    content_html: req.body.content_html,
    slug: req.body.slug,
    author: req.body.author,
    published: req.body.published,
    excerpt: req.body.excerpt,
    article_topics: req.body.article_topics,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.UpdateArticle(client, input);
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

async function DeleteArticleHandler(req: any, reply: FastifyReply) {
  await req.server.pg.connect(onConnect);

  const input: DeleteArticleRequest = {
    article_id: req.params.article_id,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.ArticleRepo.DeleteArticle(client, input);
      const { error } = repoRes;

      if (error) return reply.send(error);
      return SendOK(reply, null, 'Article deleted');
    } catch (err) {
      reply.send(err);
    } finally {
      client.release();
    }
  }
}

export default ArticleService;
