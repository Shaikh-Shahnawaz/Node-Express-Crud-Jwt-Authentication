// here we are authenticate the token data is match with DB data or not

const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;
const util = require("util");

exports.verifyToken = async (req, res, next) => {
  let token;
  try {

    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    if (!token) throw new Error("A token is required for authentication");

    // const decode = await util.promisify(jwt.verify)(token, key);
    const decode = jwt.verify(token, key);
    if(!decode) throw new Error("Invalid Token")

    next();

  } catch (error) {
    next(error);
    // return res.status(401).send("Invalid Token")
  }
};