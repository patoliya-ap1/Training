const express = require("express");
const errorMiddleware = require("./middleware/errorMiddleware");
const AppError = require("./utility/AppError");
const {
  getPosts,
  addPosts,
  deletePost,
  updatePosts,
} = require("./dataService");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Posts CRUD server" });
});

app.get("/error", (req, res, next) => {
  const err = new AppError("My Custom error", 500);
  next(err);
});

// get

app.get("/posts", (req, res, next) => {
  const posts = getPosts();
  if (!posts) {
    const error = new AppError("error while getting post", 500);
    next(error);
  }
  res
    .status(200)
    .json({ success: true, message: "post fetched successfully.", posts });
});

// post

app.post("/posts", (req, res, next) => {
  const newPost = req.body;
  const newAddedPost = addPosts(newPost);
  if (!newAddedPost) {
    const error = new AppError("error while adding post", 500);
    next(error);
  }
  res.status(201).json({
    success: true,
    message: "new post added successfully.",
    newPost: newAddedPost,
  });
});

// put

app.put("/posts/:id", (req, res, next) => {
  const postId = req.params.id;
  const updateData = req.body;
  const updatedPost = updatePosts(postId, updateData);
  if (updatedPost == null) {
    const error = new AppError(`post not found with id ${postId}`, 404);
    next(error);
  }
  if (!updatePosts) {
    const error = new AppError("error while update post", 500);
    next(error);
  }
  res.status(200).json({
    success: true,
    message: "post updated successfully.",
    updatedPost,
  });
});

// delete
app.delete("/posts/:id", (req, res, next) => {
  const postId = req.params.id;
  const deletedPost = deletePost(postId);
  if (deletedPost == null) {
    const error = new AppError(`post not found with id ${postId}`, 404);
    next(error);
  }
  if (!deletedPost) {
    const error = new AppError("error while adding post", 500);
    next(error);
  }
  res.status(201).json({
    success: true,
    message: "post deleted successfully.",
    deletedPost,
  });
});

app.use(errorMiddleware);

app.all("/*fallback", (req, res, next) => {
  res.status(404).json({ message: "api route not found" });
});

const Port = 8000;
app.listen(Port, () => {
  console.log(`Server is running on Port ${Port}`);
});
