import ArticleRepo from './article';
import TopicRepo from './topic';

const repo = {
  ArticleRepo,
  TopicRepo,
};

export type RepoContext = {
  client: any;
  release: any;
  input: any;
};

export default repo;
