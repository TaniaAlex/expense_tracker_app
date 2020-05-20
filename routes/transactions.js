const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controlers/transactionControler");

// router.get("/", (req, res) => res.send("Hello_Server response"));
router.route("/").get(getTransactions).post(addTransaction);

// to delete transaction we need an id
router.route("/:id").delete(deleteTransaction);
module.exports = router;
