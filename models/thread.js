const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  topicName: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
