const Order = require('../../models/order');

const deleteOrderController = async (req, res) => {
  try {
    const { _id } = req.user;
    const deletedOrder = await Order.findOneAndDelete({ _id: req.params.id, owner: _id });
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
