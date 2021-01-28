const User = require('../../models/user');

const registerController = async (req, res) => {
  try {
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();
    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();
    res.status(201).send({ user, token, refreshToken });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = registerController;
