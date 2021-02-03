const changePasswordController = async (req, res) => {
  try {
    const { user } = req;
    user.password = req.body.password;
    await user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = changePasswordController;
