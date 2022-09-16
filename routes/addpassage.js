const Passage = require("../model/Passage");
const router = require("express").Router();


// CREATE PASSAGE
router.post("/add", async (req, res) => {
    const newPassage = new Passage(req.body);
    try {
        const savedPassage = await newPassage.save();
        res.status(200).json(savedPassage);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;