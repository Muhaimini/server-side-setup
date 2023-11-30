import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Your server running on http://localhost:${process.env.SERVER_PORT}`
  );
});
