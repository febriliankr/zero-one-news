// // Start server
// func Start(app *app.HeartApp) {
// 	srv := server.New()
// 	svc := service.GetServices(app)

import { Config } from '../../../config/config';
import { StartServer } from './server/server';
import Services from './service/service';
import GetServices from './service/service';
import Topics from './service/topic';

// Start server

// func Start(app *app.HeartApp) {
// 	srv := server.New()
// 	svc := service.GetServices(app)

// 	Init Drivers Handlers

// 	users := srv.Group("/users")
// 	users.GET("", svc.GetUserListHandler)
// 	users.GET("/:id", svc.GetUserHandler)

// 	server.Start(srv, &app.Cfg.Server)
// }

function StartREST(config: Config) {
  const server = StartServer(config);
  const svc = Services;

  server.get('/', healthCheck);
  server.get('/health', healthCheck);
  server.get('/articles', svc.Articles.GetArticlesListHandler);
//   server.get('/articles/:article_id', null);
  server.get('/topics', svc.Topics.GetTopicListHandler);
//   server.get('/topics/:article_id', null);
}

function healthCheck(req, reply) {
  reply.send('OK');
}

export default StartREST;
