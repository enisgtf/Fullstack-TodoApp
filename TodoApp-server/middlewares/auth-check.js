const jwt = require("jsonwebtoken");

const isAuthorized = async (req, res, next) => {
  const token = req.headers.token;
  if (!token || token === "")
    return res
      .status(400)
      .json({ message: "You must be logged in."});
  const isVerifiedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!isVerifiedToken) {
    return next("Something went wrong. Please login again!");
  }else{
    return next();
  }
};


module.exports = isAuthorized;