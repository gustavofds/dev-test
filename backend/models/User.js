const connection = require('./connection');

exports.getAll = async () => {
  const db = await connection();

  const users = await db.collection('users').find().toArray();

  return users;
};
