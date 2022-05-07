import { Config } from '../../../config/config';
import { StartServer } from './server/server';
import NewServices from './service/service';

function StartREST(config: Config) {
  const server = StartServer(config);
  const svc = NewServices();

  server.get('/', home);
  server.get('/health', healthCheck);
  server.get('/articles/:article_id', svc.Articles.GetArticleByIDHandler);
  server.get('/articles', svc.Articles.GetArticleListHandler);
  server.get('/topics', svc.Topics.GetTopicListHandler);
  //   server.get('/topics/:article_id', null);
}

function healthCheck(req, reply) {
  reply.send('OK');
}

function home(req, reply) {
  reply.send('Home');
}

export default StartREST;
