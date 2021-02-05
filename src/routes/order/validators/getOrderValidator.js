const { Joi, Segments } = require('celebrate');

const sortingSchema = {
  [Segments.QUERY]: {
    limit: Joi.number().max(150),
    skip: Joi.number(),
    sortBy: Joi.string(),
  },
};

module.exports = sortingSchema;
