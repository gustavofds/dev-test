const userService = require('../services/userService');

exports.getAllUsers = async (_req, res) => {
  const users = await userService.getAll();

  res.status(200).json({ users });
};
