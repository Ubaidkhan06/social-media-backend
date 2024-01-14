const User = require("../models/user.model");
const { createUser } = require("../services/user.service");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const userValidation = require("../validations/user.validation");

const generateAccessAndRefreshToken = async (user) => {
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();
  return { accessToken, refreshToken };
};

// * Register Functionality
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user
    );
    user.refreshToken = refreshToken;
    await user.save();

    const returnObj = {
      email: user?.email,
      id: user?._id,
      accessToken,
      refreshToken,
    };

    res.json(new ApiResponse(200, returnObj, "Registered succesfully"));
  } catch (error) {
    res.json(new ApiError(500, "Creating user error", error));
  }
};

//  * Login Functionality
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("reached");
  try {
    const existingUser = await User.findOne({ email });
    // console.log(existingUser);
    if (!existingUser) {
      res?.json(
        new ApiResponse(
          403,
          { message: "No user with the give email id" },
          "Unauthoriozed"
        )
      );
    }
    const isPasswordMatch = await existingUser?.isPasswordCorrect(password);
    console.log("ubaid : ", isPasswordMatch);
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      existingUser
    );
    if (isPasswordMatch) {
      existingUser.refreshToken = refreshToken;
      await existingUser.save();

      const returnObj = {
        email: existingUser?.email,
        id: existingUser?._id,
        accessToken,
        refreshToken,
      };

      res.status(200).json(
        new ApiResponse(200, returnObj)
      );
    } else {
      res
        ?.status(400)
        .json(
          new ApiResponse(400, "Invalid Credentials", "Invalid Credentials")
        );
    }
  } catch (error) {
    res.status(500).json(new ApiError(500, "Something went wrong", error));
  }
};

module.exports = {
  registerUser,
  loginUser,
};
