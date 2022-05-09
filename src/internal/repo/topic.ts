import {
  CreateTopicRequest,
  CreateTopicResponse,
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
  CreateTopic,
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
async function CreateTopic(
  client,
  input: CreateTopicRequest
): Promise<CreateTopicResponse> {
  try {
    const params = [input.title, input.description];
    const sql = queries.topics.queryCreateTopic;
    const { rows: topicRows } = await client.query(sql, params);

    return {
      data: {
        topic_id: topicRows[0].topic_id,
      },
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
