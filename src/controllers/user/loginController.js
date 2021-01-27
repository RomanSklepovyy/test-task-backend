const findByCredentials = require('../../services/authServices/findByCredentials');

const loginController = async (req, res) => {
  try {
    const user = await findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = loginController;
