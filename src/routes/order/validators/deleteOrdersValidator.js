const { Joi, Segments } = require('celebrate');

const idSchema = {
  [Segments.BODY]: {
    selected: Joi.array().items(Joi.string()),
  },
};

module.exports = idSchema;
