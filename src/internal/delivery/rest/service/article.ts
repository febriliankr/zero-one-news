import { getPagination } from './request';
import { RestContext } from './types';

const ArticleServices = {
  GetArticlesListHandler,
};

function GetArticlesListHandler(req, reply) {
  req.server.pg.connect(onConnect);

  function onConnect(err, client, release) {
    if (err) return reply.send(err);

    client.query(
      'SELECT * FROM topics WHERE id=$1',
      [req.params.id],
      function onResult(err, result) {
        release();
        reply.send(err || result);
      }
    );
  }
}

export default ArticleServices;