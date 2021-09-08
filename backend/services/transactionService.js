const Transaction = require('../models/Transaction');

exports.getAll = async () => {
  const transactions = await Transaction.getAll();

  return transactions;
};