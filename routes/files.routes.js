const router = require("express").Router();
const file = require("../model/Files");

router.get("/", async (req, res) => {
    const document = await file.find();
    res.json(document);
  });

  module.exports = router