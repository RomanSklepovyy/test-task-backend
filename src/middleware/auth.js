const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decodedToken;
    const user = await User.findOne({ _id, 'tokens.token': token });
    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      res.status(401).send({ error: { statusCode: 401, message: 'Session timed out, please login.' } });
      return;
    } if (e.name === 'JsonWebTokenError') {
      res.status(401).send({ error: { statusCode: 401, message: 'Invalid token. Please login again.' } });
      return;
    }
    res.status(401).send({ error: { statusCode: 401, message: 'Please authenticate.' } });
  }
};

module.exports = auth;
