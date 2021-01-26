const express = require('express');
const mongoose = require('mongoose');
const orderRouter = require('./routes/order/index');

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const app = express();

app.use(express.json());
app.use(orderRouter);

module.exports = app;
