const User = require('../../models/user');

const registerController = async (req, res) => {
  try {
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = registerController;
