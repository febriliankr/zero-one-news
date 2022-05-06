const articles = {
  queryCreateNewArticle: `INSERT INTO articles(title, content_plain, content_html, slug, author, created_at, updated_at, excerpt, published) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING article_id`,
  queryGetAllArticles: `SELECT * FROM articles  WHERE ($1 = '' OR title ILIKE $1) OFFSET $2 LIMIT $3`,
  queryGetArticleById: `SELECT * FROM articles WHERE article_id=$1`,
  queryUpdateArticle: `UPDATE articles SET title=$1, content_plain=$2, content_html=$3 slug=$4, author=$5, created_at=$6, updated_at=$7, excerpt=$8, published=$9 WHERE article_id=$10 RETURNING article_id`,
  queryDeleteArticle: `UPDATE articles hidden=true WHERE article_id=$1`,
};
const topics = {
  queryCreateNewTopic: `INSERT INTO topics(title, description) VALUES($1, $2) RETURNING topic_id`,
  queryGetAllTopics: `SELECT * FROM topics WHERE ($1 = '' OR title ILIKE $1) OFFSET $2 LIMIT $3`,
  queryGetTopicById: `SELECT * FROM topics WHERE topic_id=$1`,
  queryUpdateTopic: `UPDATE topics SET title=$1, content_plain=$2, content_html=$3 slug=$4, author=$5, created_at=$6, updated_at=$7, excerpt=$8, published=$9 WHERE topic_id=$10 RETURNING topic_id`,
  queryDeleteTopic: `UPDATE topics hidden=true WHERE topic_id=$1`,
};

const queries = {
  articles,
  topics,
};
export default queries;
