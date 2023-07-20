import bodyParser from "body-parser";
import express from "express";
import fs from "fs";
import cors from "cors";

import postsRouter from "./routes/posts-route.js";

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/blog/posts", postsRouter);

app.listen(PORT, () => console.log(`Server Listening on PORT ${PORT}`));
