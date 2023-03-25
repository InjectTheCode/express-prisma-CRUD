const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const productRouter = require("./routes/productRoute");
const productController = require("./controllers/productController");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/api", productRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
