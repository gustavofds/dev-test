const transactionService = require('../services/transactionService');

exports.getAllTransactions = async (_req, res) => {
  const transactions = await transactionService.getAll();

  res.status(200).json({ transactions });
};
