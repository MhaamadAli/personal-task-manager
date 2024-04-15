const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const boardController = require("../controllers/boards.controller");
const router = express.Router();

router.get("/", isAuthenticated, boardController.getAllBoards);
router.get("/:id", isAuthenticated, boardController.getBoard);
router.post("/", isAuthenticated, boardController.addBoard);
router.put("/:id", isAuthenticated, boardController.editBoard);
router.delete("/:id", isAuthenticated, boardController.deleteBoard);

module.exports = router;
