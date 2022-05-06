import queries from './queries';

const ArticlesRepo = {
  GetTopicsList,
};

function GetTopicsList(client, release, input) {
  const query = queries.topics.queryGetAllTopics;

  client.query(query, function onResult(err, result) {
    release();
    return [result, err];
    // reply.send(err || result);
  });
}

export default ArticlesRepo;
