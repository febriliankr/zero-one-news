# Rate Limit

- I am using rate limit plugin for fastify https://github.com/fastify/fastify-rate-limit
- timeWindow: the duration of the time window. It can be expressed in milliseconds or as a string (in the ms format) https://github.com/vercel/ms
- Standard rate limit
  - GET request = 100/minute
  - POST request = 60/minute
  - PATCH request = 60/minute
  - DELETE request = 60/minute
- Questions
  - can I just set 1 value something globally?
  - I'll try with 120/minute first (May 7th, 2022)

```
    // add a limited route with global config
    fastify.get('/', (request, reply) => {
    reply.send({ hello: 'from ... rate limited root' })
    })

    // this route doesn't have any rate limit
    fastify.get('/public', {
    config: {
        rateLimit: false
    }
    }, (request, reply) => {
    reply.send({ hello: 'from ... public' })
    })

    // add a limited route with global config and different max
    fastify.get('/private', {
    config: {
        rateLimit: {
        max: 9
        }
    }
    }, (request, reply) => {
    reply.send({ hello: 'from ... private and more limited' })
    })
```
