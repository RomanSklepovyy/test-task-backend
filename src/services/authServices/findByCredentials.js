const User = require('../../models/user');

const findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Unable to login');
  }
  if (password !== user.password) {
    throw new Error('Unable to login');
  }
  return user;
};

module.exports = findByCredentials;
