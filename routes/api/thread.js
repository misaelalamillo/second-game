const router = require("express").Router();
const threadsController = require("../../controllers/threadsController");
const commentsController = require("../../controllers/commentsController");


router.route("/")
    .get(threadsController.findAll);

router.route("/:id")
    .delete(threadsController.remove)
    .put(threadsController.update)
    .get(commentsController.findById)
    .post(commentsController.create)
    .put(commentsController.update)
    .delete(commentsController.remove);

    module.exports = router;