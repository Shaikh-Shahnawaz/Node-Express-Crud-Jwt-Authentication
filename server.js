const app = require("./app")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const DB  = process.env.MONGO_URL

mongoose.connect(DB).then((data)=>{
    console.log("DB Connected !!!")

    app.listen(PORT,()=>{
        console.log(`Server Running At http://localhost:${PORT}`)
    })
}).catch(err=>console.log(err))