import queries from './queries';

const TopicRepo = {
  GetTopicsList,
};
async function GetTopicsList(client, release, input) {
  const query = queries.topics.queryGetAllTopics;

  const [res, err] = await client.query(query, function onResult(err, result) {
    release();
    const rows = result.rows;
    return [rows, err];
  });

  return [res, err];
}

export default TopicRepo;
