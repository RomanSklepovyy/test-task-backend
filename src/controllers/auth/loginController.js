const findByCredentials = require('../../services/authServices/findByCredentials');

const loginController = async (req, res) => {
  try {
    const user = await findByCredentials(req.body.email, req.body.password);
    if (!user) {
      res.status(400).send({ message: 'no auth found' });
      return;
    }
    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();
    res.status(200).send({ user, token, refreshToken });
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = loginController;
