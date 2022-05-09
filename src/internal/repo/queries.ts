const articles = {
  queryCreateArticle: `INSERT INTO articles(title, content_plain, content_html, slug, author, excerpt, published) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING article_id`,

  queryCreateArticleTopic: `INSERT INTO article_topics(article_id, topic_id) VALUES($1, $2)`,
  queryGetAllArticles: `SELECT * FROM articles WHERE (published=$1 AND $2 = '' OR title ILIKE $2) OFFSET $3 LIMIT $4`,
  queryGetArticleBySlug: `SELECT * FROM articles WHERE slug=$1 LIMIT 1`,
  queryGetArticleTopicByArticleId: `SELECT article_topics.article_topic_id, article_topics.article_id, topics.topic_id, topics.title FROM article_topics JOIN topics ON article_topics.topic_id = topics.topic_id WHERE article_id=$1`,

  queryUpdateArticle: `UPDATE articles SET title=$1, content_plain=$2, content_html=$3, slug=$4, author=$5, excerpt=$6, published=$7 WHERE article_id=$8 RETURNING article_id`,
  queryCleanArticleTopicByArticleID: `DELETE FROM article_topics WHERE article_id=$1`,
  queryDeleteArticle: `UPDATE articles hidden=true WHERE article_id=$1`,
};
const topics = {
  queryCreateTopic: `INSERT INTO topics(title, description) VALUES($1, $2) RETURNING topic_id`,
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
