const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/game-it", {
  useNewUrlParser: true
});

const userSeed = [
  {
    name: "max",
    username: "madmax",
    password: "furyroad",
    date: new Date(Date.now())
  }, {
    
  }
];

const threadSeed = [
  {
    userId: 1,
    username: "madmax",
    topicName: "Madmax fury road",
    content: "what everyones thoughts",
    date: new Date(Date.now())

  }
];

const commentSeed = [
  {
    userId: 1,
    threadId: 1,
    comment: "the game sucks",
    date: new Date(Date.now())

  }
];

  db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Comment.deleteMany({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Thread.deleteMany({})
  .then(() => db.Thread.collection.insertMany(threadSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });