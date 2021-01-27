const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer', '');
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // eslint-disable-next-line no-underscore-dangle
    const user = await User.findOne({ _id: decodedToken._id, 'tokens.token': token });
    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: { statusCode: 401, message: 'Please authenticate.' } });
  }
};

module.exports = auth;
