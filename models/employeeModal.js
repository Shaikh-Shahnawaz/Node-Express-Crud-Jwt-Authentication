const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
 phone:{
    type:Number,
    required:true,
 },
 email:{
    type:String,
    required:true,
 },
 address:{
   type:String,
   required:true,
},
photo:{
   type:String,
   required:false,

 }
  
});

const Employee = mongoose.model('employees',usersSchema) // collection name in database

module.exports = Employee;