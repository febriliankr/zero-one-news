import queries from './queries';

function TopicRepo(client, release, input) {
  GetTopicsList(client, release, input);
  return {
    GetTopicsList,
  };
}
function GetTopicsList(client, release, input) {
  const query = queries.topics.queryGetAllTopics;

  client.query(query, function onResult(err, result) {
    release();
    return [result, err];
    // reply.send(err || result);
  });
}

export default TopicRepo;
