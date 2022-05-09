import { Config } from '../../../config/config';
import { StartServer } from './server/server';
import NewServices from './service/service';

function StartREST(config: Config) {
  const server = StartServer(config);
  const svc = NewServices();
  // Root
  server.get('/', home);

  // Health Check
  server.get(`/health`, healthCheck);

  // # Content API
  // Content API / Articles
  server.get(`/content/articles`, svc.Articles.GetArticleListHandler);
  server.get(
    '/content/articles/:slug',
    svc.Articles.GetArticleBySlugHandler
  );
  // Content API / Topics
  server.get('/content/topics', svc.Topics.GetTopicListHandler);
  server.get('/content/topics/:topic_id', svc.Topics.GetTopicByIDHandler);

  // # Admin
  // Admin / Articles
  server.post('/admin/articles', svc.Articles.CreateArticleHandler);
  server.patch('/admin/articles', implementedSoon);
  // Admin / Topics
  server.post('/admin/topics', implementedSoon);
  server.patch('/admin/topics', implementedSoon);
  return server;
}

function healthCheck(req, reply) {
  reply.send('OK');
}

function home(req, reply) {
  reply.send('Home');
}

function implementedSoon(req, reply) {
  reply.send('Implemented Soon');
}

export default StartREST;
