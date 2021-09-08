const { ObjectId } = require('mongodb');
const User = require('../models/User');

exports.getAll = async () => {
  const users = await User.getAll();

  return users;
};

exports.getUserById = async (id) => {
  if(!ObjectId.isValid(id)) return null;

  const db = await connection();

  const user = await db.collection('users').findOne({ _id: ObjectId(id) });

  return user || null;
};

exports.getUserByEmail = async (email) => {
  const db = await connection();

  const user = await db.findOne({ email });

  return user || null;
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
