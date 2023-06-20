const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.middlewareAuthentication = (req,res,next)=>{

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            req.body.password = hash
            next()
        });
    });


}