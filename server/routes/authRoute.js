const express = require("express");
const { loginCtrl, registerCtrl } = require("../controllers/authCtrl");
const { getQuotes } = require("../controllers/contactCtrl");
const router = express.Router();

router.post("/getQoutes", getQuotes
);


router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
module.exports = router;