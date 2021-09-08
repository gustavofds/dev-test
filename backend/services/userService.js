const { ObjectId } = require('mongodb');
const User = require('../models/User');

exports.getAll = async () => {
  const users = await User.getAll();

  return users;
};

exports.getUserByEmail = async (email) => {
  const users = await User.findOne({ email });

  return users;
}

exports.createUser = async({ fullName, email, password }) => {
  const db = await connection();

  const user = await db.collection('users').insertOne({ fullName, email, password });

  return {
    id: user.insertedId,
    firstName,
    lastName,
    email,
  };
};
