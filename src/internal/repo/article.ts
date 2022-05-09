import { PostgresDb } from '@fastify/postgres';
import {
  Article,
  CreateArticleRequest,
  CreateArticleResponse,
  GetArticleBySlugRequest,
  GetArticleBySlugResponse,
  GetArticleListRequest,
  GetArticleListResponse,
  UpdateArticleRequest,
  UpdateArticleResponse,
} from '../entity/article';
import queries from './queries';

const ArticleRepo = {
  GetArticleList,
  GetArticleBySlug,
  CreateArticle,
  UpdateArticle,
};

async function GetArticleList(
  db: PostgresDb,
  input: GetArticleListRequest
): Promise<GetArticleListResponse> {
  const sql = queries.articles.queryGetAllArticles;

  try {
    const { rows } = await db.query(sql, [
      input.published,
      input.title,
      input.offset,
      input.limit,
    ]);
    const articles: Article[] = rows;
    return {
      data: articles,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

async function GetArticleBySlug(
  client,
  input: GetArticleBySlugRequest
): Promise<GetArticleBySlugResponse> {
  try {
    const { rows } = await client.query(
      queries.articles.queryGetArticleBySlug,
      [input.slug]
    );
    const articleRow: Article = rows[0];

    const { rows: articleTopic } = await client.query(
      queries.articles.queryGetArticleTopicByArticleId,
      [articleRow.article_id]
    );

    const article: Article = {
      ...articleRow,
      article_topic: articleTopic,
    };

    return {
      data: article,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

async function CreateArticle(
  client,
  input: CreateArticleRequest
): Promise<CreateArticleResponse> {
  try {
    // $1, $2, $3, $4, $5, $6, $7, $8, $9
    const params = [
      input.title,
      input.content_plain,
      input.content_html,
      input.slug,
      input.author,
      input.excerpt,
      input.published,
    ];
    const sql = queries.articles.queryCreateArticle;
    const { rows: articleRows } = await client.query(sql, params);
    const article = articleRows[0];

    const sqlArticleTopic = queries.articles.queryCreateArticleTopic;

    input.article_topics.map((article_topic) => {
      const params2 = [article.article_id, article_topic.topic_id];
      client.query(sqlArticleTopic, params2);
    });

    return {
      data: article,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}
async function UpdateArticle(
  client,
  input: UpdateArticleRequest
): Promise<UpdateArticleResponse> {
  try {
    // $1, $2, $3, $4, $5, $6, $7, $8, $9

    const params = [
      input.title,
      input.content_plain,
      input.content_html,
      input.slug,
      input.author,
      input.excerpt,
      input.published,
      input.article_id,
    ];

    
    const sql = queries.articles.queryUpdateArticle;
    const { rows: articleRows } = await client.query(sql, params);
    const article = articleRows[0];

    await client.query(queries.articles.queryCleanArticleTopicByArticleID, [
      article.article_id,
    ]);

    const sqlArticleTopic = queries.articles.queryCreateArticleTopic;

    input.article_topics.map((article_topic) => {
      const params2 = [article.article_id, article_topic.topic_id];
      client.query(sqlArticleTopic, params2);
    });

    return {
      data: article,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export default ArticleRepo;
