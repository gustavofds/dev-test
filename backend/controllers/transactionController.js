const transactionService = require('../services/transactionService');

exports.getAllTransactions = async (req, res, next) => {
  if (req.query.userId) return next();
  

  const transactions = await transactionService.getAll();

  res.status(200).json({ transactions });
};

exports.getAllByUserId = async (req, res) => {
  // http://localhost:3000/api/transactions?userId=613920df202008b80675de7a
  const { userId } = req.query;

  const transactions = await transactionService.getAllByUserId(userId);

  if (transactions.message) return res.status(404).json({ message: user.message });

  res.status(200).json({ transactions });
};
