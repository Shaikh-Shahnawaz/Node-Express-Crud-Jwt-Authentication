const Employee = require("../models/employeeModal");
const cloudinary = require("cloudinary").v2;


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.showEmployees = async (req, res,next) => {
  try {
    const data = await Employee.find();
    res.json({ message: "Success", data: data });
  } catch (error) {
    next(error)
  }
};
exports.addEmployee = async (req, res,next) => {
  try {
    // console.log("req =>>",req.body)

    if (req.file) {
      // uploading image to cloudinary
      // const result = await cloudinary.uploader.upload(req.files.image.path);
      const result = await cloudinary.uploader.upload(req.file.path);
    
    
        // image link from the result
      const url = result.secure_url;

      // adding link in body
      req.body["photo"] = url;
    }

    const phoneExist = await Employee.findOne({phone:req.body.phone})
    if(phoneExist){
      throw new Error("Phone number alreay present")
    }else{

      const data = await Employee.create(req.body);
      res.json({ message: "User Added",status:200 });
    }
  } catch (error) {
    next(error)
  }
};

exports.updateEmployeeById = async (req, res,next) => {
  try {

    const query = {};
    // if user updating image
    if (req.file) {
      // uploading image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // image link from the result
      const url = result.secure_url;

      // adding link in body
      query["photo"] = url;
    }

    for (let i in req.body) {
      if (req.body[i]) {
        query[i] = req.body[i];
      }
    }
    const data = await Employee.updateOne({ _id: req.body._id }, { $set: query });

    res.json({ message: "User Updated"});
  } catch (error) {
    next(error)
  }
};

// getting the id in body
exports.deleteEmployeeById = async (req, res,next) => {
  // console.log('inside delete employee ',req.body.id, req.method);
  try {
    const data = await Employee.deleteOne({ _id: req.body.id });
    res.json({ message: "User Deleted"});
  } catch (error) {
    next(error)
  }
};
