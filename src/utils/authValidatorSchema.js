const { Joi, Segments } = require('celebrate');

const loginSchema = {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
};

module.exports = loginSchema;
