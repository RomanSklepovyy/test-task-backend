const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  address1: {
    type: String,
    required: true,
    trim: true,
  },
  address2: {
    type: String,
    trim: true,
  },
  address3: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zip: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
}, { _id: false });

const lineItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
  },
}, { _id: false });

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  status: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    trim: true,
  },

  orderedBy: {
    type: addressSchema,
    required: true,
  },

  shipTo: {
    type: addressSchema,
  },

  billTo: {
    type: addressSchema,
  },

  lineItems: [{
    type: lineItemSchema,
  }],
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
