import express from 'express';
import { Message } from '../controllers/chatbot.message.js';
const router=express.Router();

router.post("/v1/message",Message)
 

export default router;
