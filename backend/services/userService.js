const User = require('../models/User');

exports.getAll = async () => {
  const users = await User.getAll();

  return users;
};

exports.createUser = async ({ fullName, email, password }) => {
  try {
    if (!fullName || !email || !password) return { message: 'Invalid data'};

    const emailAlreadyExists = await User.getUserByEmail(email);

    if (emailAlreadyExists) return { message: 'Enter a valid email'};

    const user = await User.createUser({ fullName, email, password });
  } catch(err) {
    console.log(err);
    return { message: err.message };
  }
};
