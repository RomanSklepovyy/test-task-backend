const getUserController = (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = getUserController;
