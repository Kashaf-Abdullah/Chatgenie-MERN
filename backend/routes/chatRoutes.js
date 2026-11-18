
import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  addConversation,
  createChat,
  deleteChat,
  generateResponse,
  getAllChats,
  getConversation,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/generate", isAuth, generateResponse);
router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats);
router.post("/:id", isAuth, addConversation);
router.get("/:id", isAuth, getConversation);
router.delete("/:id", isAuth, deleteChat);

export default router;