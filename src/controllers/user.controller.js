const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const UserService = require("../services/user.service");

const UserServiceInstance = new UserService();

const getUserDetails = async (req, res) => {
  const { userId } = req.params;
  console.log("userId", userId);

  try {
    const user = await UserServiceInstance.getUserDetails(userId);
    if (!user) {
      throw new ApiError(500, "Check user id again");
    }
    if (user) {
      res.json(new ApiResponse(200, user, "Details fetched Succesfully"));
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Mongo fetching failed", error);
  }

};

module.exports = getUserDetails;
