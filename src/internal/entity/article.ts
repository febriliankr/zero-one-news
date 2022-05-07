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
  uuid: string;
};
export type GetArticleByIDRequest = {
  article_id: number;
};

export type GetArticleByIDResponse = { data: Article; error: Error };

export type GetArticleListRequest = {
  page: number;
  offset: number;
  limit: number;
  title?: string;
};

export type GetArticleListResponse = { data: Article[]; error: Error };
