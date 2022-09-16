const Admin = require("../model/Admin");
const router = require("express").Router();


// CREATE Admin
router.post("/admin", async (req, res) => {
    let recivedEmail = req.body;
    recivedEmail = recivedEmail.email;
    try {
        let verdict = await Admin.findOne({ email: recivedEmail}).exec();
        if(verdict === null) verdict = false;
        else verdict = true;
        res.status(200).json(verdict);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;