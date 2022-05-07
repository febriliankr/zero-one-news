import { getPagination } from './request';

const Topics = { GetTopicListHandler };

function GetTopicListHandler(req, reply) {
  const { page, limit } = getPagination(req);
  const offset = (page - 1) * limit;

  // @ts-ignore
  req.server.pg.connect(onConnect);
  function onConnect(err, client, release) {
    if (err) return reply.send(err);

    client.query(
      'SELECT * FROM topics LIMIT $1 OFFSET $2',
      [limit, offset],
      function onResult(err, result) {
        release();
        reply.send(err || result);
      }
    );
  }
}

export default Topics;
