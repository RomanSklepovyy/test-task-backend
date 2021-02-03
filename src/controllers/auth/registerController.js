const User = require('../../models/user');

const registerController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = new User({ fullName, email, password });

    await user.save();
    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();
    res.status(201).send({ user, token, refreshToken });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = registerController;
