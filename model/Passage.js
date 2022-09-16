const mongoose = require("mongoose");

const PassageSchema = new mongoose.Schema(
    {
    passage: { type: String, required: true, unique: true}
},
{timestamps: true}
);

module.exports = mongoose.model("Passage", PassageSchema);