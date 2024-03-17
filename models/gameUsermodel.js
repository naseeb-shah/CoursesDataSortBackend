const mongoose = require('mongoose')


const userWithGame= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    preGames:[Object]
})

const  gameUser= mongoose.model('userGame',userWithGame)
module.exports=gameUser