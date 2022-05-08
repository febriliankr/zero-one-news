import ArticleService from './article';
import TopicsService from './topic';

function NewServices() {
  return {
    Articles: ArticleService,
    Topics: TopicsService,
  };
}

export default NewServices;
