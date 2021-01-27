const findByCredentials = require('../../services/authServices/findByCredentials');

const loginController = async (req, res) => {
  try {
    const user = await findByCredentials(req.body.email, req.body.password);
    if (!user) {
      res.status(400).send();
      return;
    }
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = loginController;
