const Order = require('../../models/order');

const updateOrderController = async (req, res) => {
  try {
    // const updatesKeys = Object.keys(req.body);
    // const allowedKeys = ['status', 'description', 'orderedBy', 'shipTo', 'billTo', 'lineItems'];
    // const isValidUpdate = updatesKeys.every((updateKey) => allowedKeys.includes(updateKey));

    // if (!isValidUpdate) {
    //   res.status(400).send();
    // }

    const order = await Order.findByIdAndUpdate(req.params.id, { ...req.body });

    if (!order) {
      res.status(404).send();
      return;
    }

    // eslint-disable-next-line no-return-assign
    // updatesKeys.forEach((updatesKey) => {
    //   order[updatesKey] = typeof req.body[updatesKey] === 'object'
    //     ? mergeDeepRight(order[updatesKey], req.body[updatesKey])
    //     : req.body[updatesKey];
    // });
    // console.log(req.body.orderedBy);
    // console.log(order.orderedBy);

    res.status(200).send(order);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = updateOrderController;
