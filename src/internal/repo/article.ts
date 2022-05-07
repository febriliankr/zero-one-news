import {
  Article,
  GetArticleByIDRequest,
  GetArticleByIDResponse,
  GetArticleListRequest,
  GetArticleListResponse,
} from '../entity/article';
import queries from './queries';

const ArticleRepo = {
  GetArticleList,
  GetArticleByID,
};

async function GetArticleList(
  client,
  input: GetArticleListRequest
): Promise<GetArticleListResponse> {
  const sql = queries.articles.queryGetAllArticles;
  console.log(
    'sql, input.title, input.offset, input.limit',
    sql,
    input.title,
    input.offset,
    input.limit
  );
  try {
    const { rows } = await client.query(sql, [
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

export default ArticleRepo;
