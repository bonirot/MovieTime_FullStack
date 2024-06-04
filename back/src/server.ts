import express from "express";
import userRoutes from "./routes/user.routes";
import movieRoutes from "./routes/movie.routes";
import genreRoutes from "./routes/genre.routes";
import formRoutes from "./routes/formmovie.routes";
import cors from "cors";
import fileUpload from "express-fileupload";
import { urlencoded } from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./uploads" }));
app.use(urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/genre", genreRoutes);
app.use("/formmovie", formRoutes);

export default app;
