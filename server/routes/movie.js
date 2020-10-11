const express = require("express");
const router = express.Router();

/*
============ Task ============

Find a way to get movie from the component and post it into the favorites page
*/
router.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = router;
