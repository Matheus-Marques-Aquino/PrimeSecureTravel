const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv');
const router = express.Router();

const authToken = require('../configs/authToken');

dotenv.config();

router.get("/", async (req, res) => {
    res.sendFile("index-form.html", { root: "public" });
});

module.exports = router;