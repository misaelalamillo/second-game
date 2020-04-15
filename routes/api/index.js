const router = require("express").Router();
const signUpR = require("./signUp");
const userR = require("./user");
const threadR = require("./thread");

router.use("/signUp", signUpR)
router.use("/user", userR)
router.use("/forum", threadR)
router.use("/search", threadR);

module.exports = router;