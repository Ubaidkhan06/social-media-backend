const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const getAllVideos = (req, res) => {
  try {
    res.json(
      new ApiResponse(
        200,
        { message: "Video Controller reached" },
        "Fetched All Vidoes succesfully"
      )
    );
  } catch (err) {
    throw new ApiError(500, "Something went wrong", err);
  }
};

module.exports = { 
    getAllVideos
}