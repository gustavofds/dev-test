const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('OK');
});

app.use('/api/users', userRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
