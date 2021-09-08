const { ObjectId } = require('mongodb');
const connection = require('./connection');

/**
 * Transaction Object
 * 
 * {
 *    _id: ObjectId
 *    userId: ObjectId
 *    type: string ('deposit', 'withdrawal', 'transfer-in', 'transfer-out')
 *    value: float
 * }
 * 
 */

exports.getAll = async () => {
  const db = await connection();

  const users = await db.collection('transactions').find().toArray();

  return users;
};
