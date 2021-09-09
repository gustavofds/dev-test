const Transaction = require('../models/Transaction');

const TRANSACTION_TYPES = ['deposit', 'withdrawal', 'transfer-in', 'transfer-out'];

const isTransactionTypeValid = (type) => {
  if (TRANSACTION_TYPES.includes(type)) return true;
  return false;
};

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

exports.createTransaction = async ({ userId, type, value }) => {
  try {
    if (
      !userId
      || !type
      || !value
      || typeof value !== 'number'
    ) return { message: 'Invalid data'};

    if (!isTransactionTypeValid(type)) return { message: 'Invalid transaction type' };

    const transaction = await Transaction.createTransaction({ userId, type, value });

    if (transaction) return transaction;

    return { message: 'Not able to perform operation' };

  } catch(err) {
    console.log(err);
    return { message: err.message };
  }
};

exports.getBalance = async (userId) => {
  const balance = await Transaction.getBalance(userId);

  return balance;
};
