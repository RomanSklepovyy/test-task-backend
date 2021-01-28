const logoutController = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = logoutController;
