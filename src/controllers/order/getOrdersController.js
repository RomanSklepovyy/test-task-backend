const Order = require('../../models/order');

const getOrdersController = async (req, res) => {
  try {
    const sort = {};
    const limit = req.query.limit ? req.query.limit : 50;
    const skip = req.query.skip ? req.query.skip : 0;

    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    const { _id } = req.user;
    const orders = await Order.find({ userId: _id }, null, {
      limit: parseInt(limit, 10),
      skip: parseInt(skip, 10),
      sort,
    });
    res.status(200).send({ orders });
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = getOrdersController;
