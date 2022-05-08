import { PostgresDb } from '@fastify/postgres';
import {
  Article,
  CreateArticleRequest,
  CreateArticleResponse,
  GetArticleByIDRequest,
  GetArticleByIDResponse,
  GetArticleListRequest,
  GetArticleListResponse,
} from '../entity/article';
import queries from './queries';

const ArticleRepo = {
  GetArticleList,
  GetArticleByID,
  CreateArticle,
};

async function GetArticleList(
  db: PostgresDb,
  input: GetArticleListRequest
): Promise<GetArticleListResponse> {
  const sql = queries.articles.queryGetAllArticles;

  try {
    const { rows } = await db.query(sql, [
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

async function GetArticleByID(
  client,
  input: GetArticleByIDRequest
): Promise<GetArticleByIDResponse> {
  try {
    const { rows } = await client.query(queries.articles.queryGetArticleById, [
      input.article_id,
    ]);
    const article: Article = rows[0];
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
    const { rows } = await client.query(sql, params);
    const article = rows[0];
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
