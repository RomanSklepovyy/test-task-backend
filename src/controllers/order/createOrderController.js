const Order = require('../../models/order');

const createOrderController = async (req, res) => {
  try {
    const { _id } = req.user;
    const order = new Order({ ...req.body, owner: _id });
    await order.save();
    res.status(201).send(order);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = createOrderController;
