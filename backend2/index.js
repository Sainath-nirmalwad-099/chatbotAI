
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import ChatbotRouters from "./routes/chatbot.route.js";

const app = express()
dotenv.config()

const port = process.env.PORT|| 3000

app.use(express.json());
app.use(cors())

// database  connection code
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("conected to MongoDB")
}).catch((error)=>{
    console.log("error connecting to MongoDB",error)
})


// defining routes
app.use("/bot",ChatbotRouters)

app.listen(port, () =>{
  console.log(`server is running on port ${port}`)
})
