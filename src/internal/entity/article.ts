export type Article = {
  article_id: number;
  title: string;
  content_plain: string;
  content_html: string;
  slug: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  published: boolean;
  hidden: boolean;
  excerpt: string;
  article_topic: ArticleTopic[];
};

export type ArticleTopic = {
  article_topic_id: number;
  article_id: number;
  topic_id: number;
};

export type GetArticleTopicResponse = {
  article_topic_id: number;
  article_id: number;
  topic_id: number;
};

export type CreateArticleTopicRequest = {
  article_topic_id: number;
};

export type GetArticleBySlugRequest = {
  slug: string;
};

export type GetArticleBySlugResponse = {
  data: Article;
  error: Error;
};

export type GetArticleListRequest = {
  page: number;
  offset: number;
  limit: number;
  title?: string;
  published: boolean;
};

export type GetArticleListResponse = {
  data: Article[];
  error: Error;
};

export type UpdateArticleBySlugRequest = {
  article_id: number;
  title: string;
  content_plain: string;
  content_html: string;
  slug: string;
  author: string;
  updated_at: Date;
  published: boolean;
  hidden: boolean;
  excerpt: string;
};

// Create Article
export type CreateArticleRequest = {
  title: string;
  content_plain: string;
  content_html: string;
  slug: string;
  author: string;
  published: boolean;
  excerpt: string;
  article_topics: {
    topic_id: number;
  }[];
};

export type CreateArticleResponse = {
  data: {
    article_id: number;
    slug: string;
  };
  error: Error;
};

// Update Article
export type UpdateArticleRequest = {
  article_id: number;
  title: string;
  content_plain: string;
  content_html: string;
  slug: string;
  author: string;
  published: boolean;
  excerpt: string;
  article_topics: {
    topic_id: number;
  }[];
};

export type UpdateArticleResponse = {
  data: {
    article_id: number;
    slug: string;
  };
  error: Error;
};
