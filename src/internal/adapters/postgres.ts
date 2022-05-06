import fastifyPlugin from 'fastify-plugin';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function dbconnector(fastify, options) {
  try {
    await client.connect();
    console.log('db connected succesfully');
    fastify.decorate('db', { client });
  } catch (err) {
    console.error(err);
  }
}

export default dbconnector;
