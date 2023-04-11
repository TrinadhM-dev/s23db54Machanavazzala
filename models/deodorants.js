const mongoose = require("mongoose")
const deodorantSchema = mongoose.Schema({
D_Name: String,
D_Type: String,
D_Cost: Number
})
module.exports = mongoose.model("Deodorant",
deodorantSchema)