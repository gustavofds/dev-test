const { ObjectId } = require('mongodb');
const connection = require('./connection');

exports.getAll = async () => {
  const db = await connection();

  const users = await db.collection('transactions').find().toArray();

  return users;
};
