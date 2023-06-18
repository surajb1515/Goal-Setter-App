import express from "express"
import dotenv from 'dotenv'
import router from "./routes/indexRoutes.js";

const PORT = process.env.PORT || 5000

dotenv.config()

const app = express();



// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Routers
app.use('/api', router)


app.listen(PORT, () => console.log(`Server is running on the PORT ${PORT}`))

