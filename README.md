# Zero One News

A REST API for News and Topic Management using TypeScript

Tech Stack:

- [x] You must use TypeScript and NodeJS as the programming language and runtime
- [ ] You may use any NodeJS web framework you like. -> Fastify

- [x] You may use any SQL or NoSQL storage for your database:

  - [x] Local Postgres
  - [x] note: database name: zero_one_news

- [ ] Bonus points for picking Zero One Group’s default choices, namely:
  - [x] Setting up your application using Nx
  - [x] Using Fastify as the web framework
  - [x] Using Postgres as the database
        Features:
- [ ] CRUD endpoints for news and topic entities
- [ ] One news article can contain multiple topics
- [ ] One topic can be associated with many news articles
- [ ] Each news article contains a status of either ‘draft’, ‘deleted’, or ‘published’
- [ ] The GET endpoint should allow for a simple filter by status and topic
- [ ] Bonus points for:
  - [x] An actual deployment using one of Heroku, Vercel, Netlify, GCP, Firebase, AWS, or any other platform for serving the application
  - [ ] One unit and integration test
  - [ ] Create CI/CD
        Delivery: put the final code on a repository on GitHub, GitLab, and BitBucket, and share the repository with me.

## Additional Stuffs

- [ ] Auth
- [ ] Use decorators for database connection
  - https://www.fastify.io/docs/latest/Guides/Plugins-Guide/#decorators
  - server.pg.query("SELECT * FROM articles")
  - Hacky solution: https://stackoverflow.com/questions/70616395/fastifyis-not-defined-and-fastify-postgres-fastify-pg-connect-not-working
    - currently using this solution
- [ ] Middleware using https://github.com/fastify/middie
- [ ] Separate content from admin endpoint
- [ ] API versioning

## Demo

Demo https://zero-one-news.herokuapp.com

## Nyampah

### Example Body Request

{
  "title": "Working on a Test",
  "content_plain": "This is a public email to Zero One Group. I am trying to pass their test by building a REST API about News.",
  "content_html": "This is a public email to Zero One Group. I am trying to pass their test by building a REST API about News.",
  "slug": "working-on-a-test",
  "author": "Febrilian Kristiawan",
  "published": true,
  "excerpt": "Public email about test"
};

## JOIN Notes

SELECT article_topics.article_topic_id, topics.topic_id, topics.title FROM article_topics JOIN topics ON article_topics.topic_id = topics.topic_id;