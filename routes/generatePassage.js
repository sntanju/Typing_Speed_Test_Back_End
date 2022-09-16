const Passage = require("../model/Passage");
const router = require("express").Router();

// GET PASSAGE
router.get("/passage", async (req, res) => {
    let text;
    let temp = Passage.aggregate([{$sample:{size: 1}}]);
    (await temp).forEach(doc => {
        text = doc.passage;
        // console.log(doc)
        // res.status(200).json(doc);
    })
     res.status(200).send(text);
});

module.exports = router;