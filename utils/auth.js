const jwt = require('jsonwebtoken');

const key =  process.env.SECRET_KEY
exports.createJwt = (payload)=>{

    const token = jwt.sign(payload,key);
    return token
}