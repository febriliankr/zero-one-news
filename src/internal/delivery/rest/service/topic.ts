import { FastifyReply } from 'fastify';
import {
  CreateTopicRequest,
  GetTopicByIDRequest,
  GetTopicListRequest,
} from '../../../entity/topic';
import repo from '../../../repo/repo';
import { getPagination } from './request';

const TopicsService = { GetTopicListHandler, GetTopicByIDHandler,CreateTopicHandler };

async function GetTopicByIDHandler(req, reply) {
  await req.server.pg.connect(onConnect);

  const input: GetTopicByIDRequest = {
    topic_id: req.params.topic_id,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.TopicRepo.GetTopicByID(client, input);
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

async function GetTopicListHandler(req, reply) {
  await req.server.pg.connect(onConnect);
  const pagination = getPagination(req);
  const input: GetTopicListRequest = {
    ...pagination,
    title: req.query.title || '',
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.TopicRepo.GetTopicList(client, input);

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

async function CreateTopicHandler(req: any, reply: FastifyReply) {
  await req.server.pg.connect(onConnect);

  const input: CreateTopicRequest = {
    title: req.body.title,
    description: req.body.description,
  };

  async function onConnect(err, client) {
    if (err) return reply.send(err);
    try {
      const repoRes = await repo.TopicRepo.CreateTopic(client, input);
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
export default TopicsService;
