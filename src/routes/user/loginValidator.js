const { Joi, Segments } = require('celebrate');

const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    // fullName: Joi.string().required().min(5),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(5),
  }),
};

module.exports = loginSchema;
