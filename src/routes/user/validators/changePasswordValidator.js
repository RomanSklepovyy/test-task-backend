const { Joi, Segments } = require('celebrate');

const changePasswordSchema = {
  [Segments.BODY]: Joi.object().keys({
    password: Joi.string().required().min(5),
  }),
};

module.exports = changePasswordSchema;
