const User = require("../models/userModal");
const { createJwt } = require("../utils/auth");

exports.signupUser = async (req, res, next) => {
  try {
    const userNameExist = await User.findOne({ username: req.body.username });
    if (userNameExist)
      throw new Error("Username not available !! Try Different username");

    const emailExist = await User.findOne({ username: req.body.email });
    if (emailExist)
      throw new Error("Email already used !! Try Different email");

    const data = await User.create(req.body);
    res.json({ message: "Signup Successful" });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.body.username });
    if (!data) throw new Error("Username not found");

    // we have to run some checks that password matches or not
    const pass = await data.correctPassword(req.body.password, data.password);
    if (!pass) throw new Error("Incorrect Password");

    // we have to return jwt
    // yeh jo data hai woh mongoose ka object hai to usko convert krna hoga normal object m
    const token = createJwt(JSON.parse(JSON.stringify(data)));

    res.json({ message: "Login SuccessFully !!", token: token });
  } catch (error) {
    // agr error aati hai to yeh next error middleware m bhej dega
    next(error);
  }
};
