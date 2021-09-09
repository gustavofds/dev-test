const Transaction = require('../models/Transaction');

exports.getAll = async () => {
  const transactions = await Transaction.getAll();

  return transactions;
};

exports.getAllByUserId = async (id) => {
  try {
    const transactions = await Transaction.getAllByUserId(id);

    if (!transactions) return { message: 'User not found' };

    return transactions;
  } catch(err) {
    console.log(err);
    return { message: err.message };
  }
};