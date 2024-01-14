const Joi = require("joi");

const userValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8).max(25),
});

module.exports = userValidation;
