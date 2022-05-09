export type Topic = {
  topic_id: number;
  title: string;
  description: string;
};

// Create Topic
export type CreateTopicRequest = {
  title: string;
  description: string;
};

export type CreateTopicResponse = {
  data: { topic_id: number };
  error: Error;
};

// Get Topic By ID
export type GetTopicByIDRequest = {
  topic_id: number;
};

export type GetTopicByIDResponse = {
  data: Topic;
  error: Error;
};

// Get Topic List
export type GetTopicListRequest = {
  page: number;
  offset: number;
  limit: number;
  title?: string;
};

export type GetTopicListResponse = {
  data: Topic[];
  error: Error;
};
