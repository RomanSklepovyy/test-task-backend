const jwt = require('jsonwebtoken');
const User = require('../../models/user');

const refreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.header('Authorization').replace('Bearer ', '');
    const decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);

    const { _id } = decodedRefreshToken;

    const user = await User.findOne({ _id });
    if (!user) {
      res.status(401).send({ error: { statusCode: 401, message: 'User not found.' } });
      return;
    }
    const token = await user.generateAuthToken();

    res.status(200).send({ token });
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      res.status(401).send({ error: { statusCode: 401, message: 'Invalid token.' } });
      return;
    }
    res.status(500).send();
  }
};

module.exports = refreshTokenController;
