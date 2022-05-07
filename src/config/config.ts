function readConfig(dotenv) {
  dotenv.config();
  const cfg: Config = {
    server: {
      port: process.env.PORT || '3000',
    },
    database: {
      url: process.env.DATABASE_URL,
    },
  };

  return cfg;
}

export type Config = {
  server: {
    port: string;
  };
  database: {
    url: string;
  };
};

export default readConfig;
