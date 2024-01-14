const ApiError = require("../utils/ApiError");
const userValidation = require("../validations/user.validation");


// * Checks if email and password is entered and if its a valid email.
const registerMiddleware = async (req, res, next) => {
  try {
    const { error } = userValidation.validate(req.body);
    if (error) {
      res
        .status(500)
        .json(new ApiError(500, "Validation Error", error.message));
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = registerMiddleware;
