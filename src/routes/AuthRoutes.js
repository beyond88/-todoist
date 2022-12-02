const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/login", (req, res) => {
    res.render('pages/login');
})

router.post("/login", (req, res) => {
    res.json({ message: "I am from login route" });
})

router.get("/register", (req, res) => {
    res.json({ message: "I am from register route" });
})

router.post("/register", (req, res) => {
    res.json({ message: "I am from register route" });
})

module.exports = router;