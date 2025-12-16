if (process.env.NODE_ENV !== "production") require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME_DEV,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    timezone: "+07:00",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "WebElements_test",
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    dialectOptions: {
      " useUTC": false,
    },
    timezone: "+07:00",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",

    timezone: "+07:00",
  },
};
