import { FastifyReply, FastifyRequest } from 'fastify';

export type RestContext = {
  req: FastifyRequest;
  reply: FastifyReply;
};
