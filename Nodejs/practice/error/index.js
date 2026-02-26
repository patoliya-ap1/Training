const express = require("express");
const createError = require("http-errors");
const errorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to error server.");
});

//sync manual error error handle

app.get("/error", (req, res, next) => {
  // throw new Error("Something went wrong");
  const err = new AppError("Something went wrong", 500);
  next(err);
});

//async error handle

app.get("/products", async (req, res, next) => {
  try {
    const response = await fetch("https://dummyjson.com/produc");
    if (!res.ok) {
      throw new Error("error while fetching");
    }
    const data = await response.json();
    return res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
});

// app.use(function (req, res, next) {
//   next(createError(404));
// });

// app.use((err, req, res, next) => {
//   return res
//     .status(500)
//     .json({ message: err.message || "Oops! Something went wrong." });
// });

app.use(errorHandler);

app.all("/*fallback", (req, res) => {
  res.status(404).json({ message: "Api route not found" });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 
