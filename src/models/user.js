const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
  refreshTokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
}, { timestamps: true });

userSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'owner',
});

userSchema.methods.generateAuthToken = async function () {
  const { _id } = this;
  const token = jwt.sign(
    { _id: _id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: '1 year' },
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

userSchema.methods.generateRefreshToken = async function () {
  const { _id } = this;
  const refreshedToken = jwt.sign(
    { _id: _id.toString() },
    process.env.JWT_REFRESH_TOKEN,
  );
  this.refreshTokens = this.refreshTokens.concat({ token: refreshedToken });
  await this.save();

  return refreshedToken;
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.refreshTokens;

  return userObject;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
