const Order = require('../../models/order');

const deleteOrdersController = async (req, res) => {
  try {
    const { _id } = req.user;
    const { selected } = req.body;
    const deletedOrders = await Order.deleteMany({ _id: { $in: selected }, userId: _id });
    if (!deletedOrders) {
      res.status(404).send();
      return;
    }
    res.status(200).send(deletedOrders);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = deleteOrdersController;
