# Zero One News

A REST API for News and Topic Management using TypeScript

Tech Stack:

- [x] You must use TypeScript and NodeJS as the programming language and runtime
- [x] You may use any NodeJS web framework you like. -> Fastify

- [x] You may use any SQL or NoSQL storage for your database:

  - [x] Local Postgres
  - [x] note: database name: zero_one_news

- [ ] Bonus points for picking Zero One Group’s default choices, namely:
  - [ ] Setting up your application using Nx
  - [x] Using Fastify as the web framework
  - [x] Using Postgres as the database
        Features:
- [x] CRUD endpoints for news and topic entities
- [x] One news article can contain multiple topics
- [x] One topic can be associated with many news articles
- [x] Each news article contains a status of either ‘draft’, ‘deleted’, or ‘published’
- [x] The GET endpoint should allow for a simple filter by status and topic
- [ ] Bonus points for:
  - [x] An actual deployment using one of Heroku, Vercel, Netlify, GCP, Firebase, AWS, or any other platform for serving the application
  - [ ] One unit and integration test
  - [ ] Create CI/CD
        Delivery: put the final code on a repository on GitHub, GitLab, and BitBucket, and share the repository with me.

## Additional Stuffs

- [x] Rate Limiter
- [x] Use decorators for database connection
  - https://www.fastify.io/docs/latest/Guides/Plugins-Guide/#decorators
  - server.pg.query("SELECT \* FROM articles")
  - Hacky solution: https://stackoverflow.com/questions/70616395/fastifyis-not-defined-and-fastify-postgres-fastify-pg-connect-not-working
    - currently using this solution
- [ ] Middleware using https://github.com/fastify/middie
- [x] Separate content from admin endpoint
- [ ] API versioning (/api/v1)
- [ ] Response wrapper 
  - eg: {"success":true, data:{}}

## Demo

Demo https://zero-one-news.herokuapp.com
