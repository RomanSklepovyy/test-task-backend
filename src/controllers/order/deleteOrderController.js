const Order = require('../../models/order');

const deleteOrderController = async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({ _id: req.params.id });
    if (!deletedOrder) {
      res.status(404).send();
      return;
    }
    res.status(200).send(deletedOrder);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = deleteOrderController;
