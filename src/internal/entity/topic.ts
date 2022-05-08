export type Topic = {
  topic_id: number;
  title: string;
  description: string;
};
export type GetTopicByIDRequest = {
  topic_id: number;
};

export type GetTopicByIDResponse = {
  data: Topic;
  error: Error;
};

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
