const bcrypt = require('bcrypt');
const User = require('../../models/user');

const findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  return !isMatch ? null : user;
};

module.exports = findByCredentials;
