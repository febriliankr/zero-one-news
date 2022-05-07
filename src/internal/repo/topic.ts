import {
  GetTopicByIDRequest,
  GetTopicByIDResponse,
  GetTopicListRequest,
  GetTopicListResponse,
  Topic,
} from '../entity/topic';
import queries from './queries';

const TopicRepo = {
  GetTopicList,
  GetTopicByID,
};

async function GetTopicList(
  client,
  input: GetTopicListRequest
): Promise<GetTopicListResponse> {
  const sql = queries.topics.queryGetAllTopics;

  try {
    const { rows } = await client.query(sql, [
      input.title,
      input.offset,
      input.limit,
    ]);
    const Topics: Topic[] = rows;
    return {
      data: Topics,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

async function GetTopicByID(
  client,
  input: GetTopicByIDRequest
): Promise<GetTopicByIDResponse> {
  try {
    const { rows } = await client.query(queries.topics.queryGetTopicById, [
      input.topic_id,
    ]);
    const Topic: Topic = rows[0];
    return {
      data: Topic,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export default TopicRepo;
