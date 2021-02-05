const Order = require('../../models/order');

const updateOrderController = async (req, res) => {
  try {
    const { _id } = req.user;

    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, userId: _id },
      { ...req.body },
      { useFindAndModify: false, new: true },
    );

    if (!order) {
      res.status(404).send({ error: { statusCode: 404, message: 'Error not found!' } });
      return;
    }

    res.status(200).send(order);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = updateOrderController;
