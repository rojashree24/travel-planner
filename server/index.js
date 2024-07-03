import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import userRoutes from './routes/user.js'
import tripRoutes from './routes/trip.js'
import feedbackRoutes from './routes/feedback.js'


const app = express();
dotenv.config()


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/', userRoutes);
app.use("/",tripRoutes);
app.use("/feedback",feedbackRoutes)


const PORT= process.env.PORT|| 5000 ;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));