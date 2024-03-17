

const mongoose= require("mongoose")



async function connectDatabase (url){
  return await mongoose.connect(url)
}

module.exports=connectDatabase