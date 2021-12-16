import pgPromise from "pg-promise";

const pgp = pgPromise({});

const config = {
  db: {
    host: "127.0.0.1",
    port: 5433,
    database: "postgres",
    user: "dev",
    password: "dev",
    max: 10,
    query_timeout: 60000
  }
};

export const sqlExecuter = pgp(config.db);
