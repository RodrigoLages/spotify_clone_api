const ApiError = require("../classes/ApiError");

const responseHandlingMiddleware = (controller) => async (req, res, next) => {
  try {
    const response = await controller(req, next);
    return res.status(200).json(response);
  } catch (err) {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({ msg: err.message });
    } else if (err.name.toLowerCase().includes("sequelize")) {
      return res.status(400).json({ msg: err.message });
    }

    console.error(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = responseHandlingMiddleware;
