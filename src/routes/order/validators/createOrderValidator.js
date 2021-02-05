const { Joi, Segments } = require('celebrate');

const addressSchema = {
  fullName: Joi.string().required(),
  company: Joi.string().required(),
  address1: Joi.string().required(),
  address2: Joi.string(),
  address3: Joi.string(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.number().required(),
  country: Joi.string().required(),
  phone: Joi.number().required(),
  email: Joi.string().email().required(),
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
  [Segments.BODY]: Joi.object().keys({
    status: Joi.string().required(),
    description: Joi.string().required(),
    orderedBy: Joi.object(addressSchema).required(),
    shipTo: Joi.object(addressSchema),
    billTo: Joi.object(addressSchema),
    lineItems: Joi.array().items(Joi.object(lineItemSchema)),
  }),
};

module.exports = orderSchema;
