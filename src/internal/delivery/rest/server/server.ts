import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { Config } from '../../../../config/config';

function StartServer(config: Config) {
  const server = fastify();
  (async () => {
    await server.register(require('@fastify/postgres'), {
      connectionString: process.env.DATABASE_URL,
    });
  })();

  const port = config.server.port;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      // @ts-ignore
      `server listening on https://localhost:${server.server.address().port}`
    );
  });

  return server;
}

export { StartServer };
