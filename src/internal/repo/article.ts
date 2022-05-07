import queries from './queries';

function ArticleRepo(client, release, input) {
  GetArticlesList(client, release, input);
  GetArticleByID(client, release, input);
  return {
    GetArticlesList,
    GetArticleByID,
  };
}

function GetArticlesList(client, release, input) {
  // TODO Fetch offset and limit from input
  const query = queries.articles.queryGetAllArticles;

  client.query(query, function onResult(err, result) {
    release();
    return [result, err];
    // reply.send(err || result);
  });
}
function GetArticleByID(client, release, input) {
  const query = queries.articles.queryGetArticleById;

  client.query(query, [input.topic_id], function onResult(err, result) {
    release();
    return [result, err];
    // reply.send(err || result);
  });
}

export default ArticleRepo;
