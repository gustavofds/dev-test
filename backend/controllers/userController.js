const userService = require('../services/userService');

exports.getAllUsers = async (_req, res) => {
  const users = await userService.getAll();

  res.status(200).json({ users });
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserById(id);

  if (user.message) return res.status(404).json({ message: user.message });

  res.status(200).json({ user });
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const user = await userService.createUser({ fullName, email, password });

  if (user.message) return res.status(400).json({ message: user.message });

  res.status(201).json({ user });
}