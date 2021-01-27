const { Joi, Segments } = require('celebrate');

const idSchema = {
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
};

module.exports = idSchema;
