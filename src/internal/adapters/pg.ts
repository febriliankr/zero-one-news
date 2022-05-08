import { Pool } from 'pg';

async function dbconnector(fastify) {
  try {
    const client = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    fastify.decorate('db', { client });
  } catch (err) {
    console.error(err.message);
  }
}

export default dbconnector;
