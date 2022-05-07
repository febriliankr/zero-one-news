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
  - [ ] Using Fastify as the web framework
  - [ ] Using Postgres as the database
        Features:

- [ ] CRUD endpoints for news and topic entities
- [ ] One news article can contain multiple topics
- [ ] One topic can be associated with many news articles
- [ ] Each news article contains a status of either ‘draft’, ‘deleted’, or ‘published’
- [ ] The GET endpoint should allow for a simple filter by status and topic
- [ ] Bonus points for:
  - [ ] An actual deployment using one of Heroku, Vercel, Netlify, GCP, Firebase, AWS, or any other platform for serving the application
  - [ ] One unit and integration test
  - [ ] Create CI/CD
        Delivery: put the final code on a repository on GitHub, GitLab, and BitBucket, and share the repository with me.

## Additional Stuffs

- [ ] Auth
- [ ] Separate content from admin endpoint
- [ ] API versioning


## Deployment

npm ERR! Missing: @fastify/postgres@^4.0.0
@fastify/rate-limit@^6.0.0
@pgtyped/cli@^0.13.0
@pgtyped/query@^0.13.0
lock file's dotenv@10.0.0 does not satisfy dotenv@^16.0.0
fastify@^3.29.0
fastify-plugin@^3.0.1
pg@^8.7.3
esbuild@^0.14.38
esbuild-node-tsc@^1.8.5