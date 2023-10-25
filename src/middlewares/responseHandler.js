const responseHandlingMiddleware = (controller) => async (req, res) => {
  try {
    const response = await controller(req);
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ msg: err.message });
  }
};

module.exports = responseHandlingMiddleware;
