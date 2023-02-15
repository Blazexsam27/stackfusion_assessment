const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const { connectToMongo } = require("./db");

app.use(cors());
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(express.static(path.join(__dirname, "./frontend/dist")));
console.log(__dirname);
app.get("*", (_, res) => {
  res.sendFile(
    path.join(__dirname, "./frontend/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
});
