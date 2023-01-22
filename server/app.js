import express from "express";
import mongoose from "mongoose";
import config from "./config";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// Routes
import postRoutes from "./routes/api/post";

mongoose.set("strictQuery", false);

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credential: true }));
app.use(morgan("dev"));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log(e));

//Use routes
app.use("/api/post", postRoutes);

export default app;
