const { ObjectId } = require('mongodb');
const User = require('../models/User');

exports.getAll = async () => {
  const users = await User.getAll();

  return users;
};
