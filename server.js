const app = require("./app")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const DB  = process.env.MONGO_URL

mongoose.connect(DB).then((data)=>{
    console.log("DB Connected !!!")

    app.listen(PORT,()=>{
        console.log(`Server Running At ${BASE_URL}${PORT}`)
    })
}).catch(err=>console.log(err))