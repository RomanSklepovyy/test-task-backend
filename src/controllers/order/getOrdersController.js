const getOrdersController = (req, res) => {
  try {
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = getOrdersController;
