const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

class UserService {
  async getUserDetails(id) {
    try {
      const user = await User.findById(id).select("-password -refreshToken -__v")
      return user;
    } catch (error) {
      throw new ApiError(500, "Error is user service get user details", error);
    }
  }
}

module.exports = UserService;
