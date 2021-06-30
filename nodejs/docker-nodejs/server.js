const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
