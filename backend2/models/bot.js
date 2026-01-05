import mongoose from "mongoose";
// import Bot from "../../frontend/chatbot/src/componant/Bot";


const botSchema=new mongoose.Schema({

   
    text:{
        type:String,
        required:true

    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const Bot=mongoose.model("Bot",botSchema)
export default Bot;