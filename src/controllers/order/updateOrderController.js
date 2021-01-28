const Order = require('../../models/order');

const updateOrderController = async (req, res) => {
  try {
    const { _id } = req.user;

    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, owner: _id },
      { ...req.body },
      { useFindAndModify: false },
    );
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
