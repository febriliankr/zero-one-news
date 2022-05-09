import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { Config } from '../../../../config/config';

function StartServer(config: Config) {
  const server = fastify();

  (async () => {
    await server.register(require('@fastify/postgres'), {
      connectionString: process.env.DATABASE_URL,
    });
    await server.register(require('@fastify/rate-limit'), {
      max: 120,
      timeWindow: '1 minute',
    });
  })();

  const port = config.server.port;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`server listening on http://localhost:${port}`);
  });

  return server;
}

export { StartServer };
