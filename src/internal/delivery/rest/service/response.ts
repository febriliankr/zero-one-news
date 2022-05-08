import { FastifyReply } from 'fastify';
import Joi from 'joi';

function SendOK(reply: FastifyReply, data: any) {
  return reply.send({ success: true, data, error: null });
}

function SendErr(reply: FastifyReply, error: Error) {
  return reply.send({ success: false, data: null, error });
}

function SendValidationError(reply: FastifyReply, error: Joi.ValidationError) {
  const message = error.details[0].message;
  return reply.code(400).send({ error: true, message: message });
}

export { SendValidationError, SendOK, SendErr };
