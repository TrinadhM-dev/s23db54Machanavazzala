const mongoose = require("mongoose")
const deodorantSchema = mongoose.Schema({
D_Name: {
    type:String,
    required:true,
    match:/^[a-zA-Z]+$/
},
D_Type: String,
D_Cost: {
    type:Number,
    min:1,
    max:100
}
})
module.exports = mongoose.model("Deodorant",
deodorantSchema)