import Articles from './article';
import TopicsService from './topic';

function NewServices() {
  return {
    Articles,
    Topics: TopicsService,
  };
}

export default NewServices;
