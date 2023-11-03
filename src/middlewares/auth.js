const ApiError = require("../classes/ApiError");
const jwt = require("jsonwebtoken");
const responseHandler = require("./responseHandler");

const authMiddleware = {
  devAuth: async (req, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      throw new ApiError(401, "User not authenticated");
    }
    if (token !== process.env.DEV_SECRET) {
      throw new ApiError(403, "Access denied");
    }

    return next();
  },

  userAuth: async (req, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      throw new ApiError(401, "User not authenticated");
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new ApiError(403, "Invalid token");
    }

    return next();
  },
};

for (let key of Object.keys(authMiddleware)) {
  authMiddleware[key] = responseHandler(authMiddleware[key]);
}

module.exports = authMiddleware;
