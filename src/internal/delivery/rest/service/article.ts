import {
  GetArticleByIDRequest,
  GetArticleListRequest,
} from '../../../entity/article';
import repo from '../../../repo/repo';
import { getPagination } from './request';

const ArticleServices = {
  GetArticleByIDHandler,
  GetArticleListHandler,
};

async function GetArticleByIDHandler(req, reply) {
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

async function GetArticleListHandler(req, reply) {
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

export default ArticleServices;
