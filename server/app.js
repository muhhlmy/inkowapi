if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const app = express();
const fileupload = require("express-fileupload");
const port = process.env.PORT || 3000;
const cors = require("cors");
const { loggerInfo } = require("./helpers/loggerDebug");
const errorHandler = require("./helpers/errorHandler");

const corsOptions = {
  origin: process.env.ORIGIN_CORS,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Content-Length",
    "X-Requested-With",
    "Accept",
  ],
  exposedHeaders: ["Content-Length", "Content-Range"],
  credentials: true,
  maxAge: 86400,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "500mb",
    parameterLimit: 100000,
  })
);
app.use(
  fileupload({
    limits: { fileSize: 500 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "File size limit has been reached",
    debug: true,
  })
);

app.use(routes);
// app.use(errorHandler);

app.listen(port, async () => {
    process.traceDeprecation = true;
    loggerInfo(`Global Access Server listening on port ${port}`);
});
