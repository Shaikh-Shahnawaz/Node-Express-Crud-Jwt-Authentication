const express = require('express')
const { showEmployees, addEmployee, updateEmployeeById, deleteEmployeeById } = require('../controllers/employeeController')
const { upload } = require('../utils/storeUserImg')
const { verifyToken } = require('../middlewares/verifyToken')
// const cloudinary = require('../utils/cloudinary')
// const upload = require('../utils/multer')
const formidable = require('express-formidable')
const router = express.Router()

// first authenticate user
router.use(verifyToken)

// show
router.get('/showEmployees',showEmployees)
// add
router.post('/addEmployee',upload,addEmployee)
// update
router.put('/updateEmployee',upload,updateEmployeeById)
// delete
router.delete('/deleteEmployee',deleteEmployeeById)




module.exports = router