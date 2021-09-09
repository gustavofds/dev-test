const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('OK');
});

app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
