import http from "http";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = 8080;

server.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
