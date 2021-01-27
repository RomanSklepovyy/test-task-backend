const Order = require('../../models/order');

const updateOrderController = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { ...req.body });
    if (!order) {
      res.status(404).send();
      return;
    }
    res.status(200).send(order);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = updateOrderController;
