const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");

// connect database
connectDb();

// init middleware
// add in middleware for parsing body in req.body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

// define routers
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
