import express from "express"
import dotenv from 'dotenv'
import router from "./routes/indexRoutes.js";
import errorHandler from './middleware/errorMiddleware.js'
import connectToMongo from "./config/db.js";
import cors from 'cors'

connectToMongo();
const PORT = process.env.PORT || 5000

dotenv.config()

const app = express();


app.use(cors({
  origin: "*"
}))
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Routers
app.use('/api', router)



app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on the PORT ${PORT}`))

