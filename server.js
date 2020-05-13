const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");

// connect database
connectDb();

// init middleware
// add in middleware for parsing body in req.body
app.use(express.json({ extended: false }));

// define routers
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

if (process.env.NODE_ENV === "production") {
  // set static folder. public folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
