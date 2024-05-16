const routerChat = require("express").Router();
const { createMessage, getMessages } = require("../controllers/Chat/chat.controller");
const { verifyToken } = require("../middlewares/AuthJWT");

routerChat.get("/", verifyToken,  getMessages);

routerChat.post("/", verifyToken, createMessage);

module.exports = { routerChat };