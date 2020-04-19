const jwt = require("jsonwebtoken");
const config = require("config");

// it takes in req, res, next. that is what the middleware func does. next allows it to move to the next middleware.
module.exports = function (req, res, next) {
  // get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // user object in jwt is user: { id: ahdjkahdka }

    // we want to give the user in the req
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "token is not valid" });
  }
};
