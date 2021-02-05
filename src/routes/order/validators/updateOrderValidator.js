const { Joi, Segments } = require('celebrate');

const addressSchema = {
  fullName: Joi.string(),
  company: Joi.string(),
  address1: Joi.string(),
  address2: Joi.string(),
  address3: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  zip: Joi.number(),
  country: Joi.string(),
  phone: Joi.number(),
  email: Joi.string().email(),
};

const lineItemSchema = {
  quantity: Joi.number().min(1).required(),
  productId: Joi.string().required(),
  unitPrice: Joi.number().min(0).required(),
  shippingPrice: Joi.number().min(0).required(),
  discount: Joi.number().min(0),
  description: Joi.string(),
};

const orderSchema = {
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: Joi.object().keys({
    _id: Joi.string(),
    status: Joi.string(),
    description: Joi.string(),
    orderedBy: Joi.object(addressSchema),
    shipTo: Joi.object(addressSchema),
    billTo: Joi.object(addressSchema),
    lineItems: Joi.array().items(Joi.object(lineItemSchema)),
  }),
};

module.exports = orderSchema;
