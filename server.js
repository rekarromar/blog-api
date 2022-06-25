require("dotenv").config();
const express = require("express");
const app = express();
const { errorHandler } = require("./middlewares/error_middleware");

const connectDB = require("./configs/db");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const blogRoutes = require("./routes/blog_routes");
const tagRoutes = require("./routes/tag_routes");
const userRoutes = require("./routes/user_routes");

app.use("/blogs", blogRoutes);
app.use("/tags", tagRoutes);
app.use("/users", userRoutes);

app.get("/", async (req, res) => {
  res.json({
    blogs: "/blogs",
    tags: "/tags",
    users: "/users",
  });
});

app.use(errorHandler);

app.listen(8080);
