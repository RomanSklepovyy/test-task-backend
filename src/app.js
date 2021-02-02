const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const orderRouter = require('./routes/order/index');
const userRouter = require('./routes/user/index');

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const app = express();

app.use(cors);
app.use(express.json());
app.use(orderRouter);
app.use(userRouter);
app.use(errors());

module.exports = app;
