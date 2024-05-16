"use strict";
const Chats = require("../../models/chat.model");
const SocketManager = require("../../../index"); 

module.exports = {
  createMessage: async (req, res) => {
    try {
      const data = req.body;

      const newMessage = new Chats({
        ...data,
        fromUser: req.user._id,
      });

      const savedMessage = await newMessage.save();
      const messageWithData = await Chats.findById(savedMessage._id).populate("fromUser").exec();

      SocketManager.io.emit("msg", messageWithData)

      return res.status(200).json({ status: 200, savedMessage });
    } catch (error) {
      return res.status(200).json({ status: 500, error: error.message });
    }
  },

  getMessages: async (req, res) => {
    try {
      const messageWithData = await Chats.find().populate("fromUser").exec();
      return res.status(200).json({ status: 200, messageWithData });
    } catch (error) {
      return res.status(200).json({ status: 500, error: error.message });
    }
  },
  
};

