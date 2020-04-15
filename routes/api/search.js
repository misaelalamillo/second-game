const router = require("express").Router();
const threadsController = require("../../controllers/threadsController");

router.route("/")
    .get(threadsController.findAll)
    .post(threadsController.create);

    module.exports = router;