const mongodb = require('mongodb').MongoClient;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

module.exports = () => {
  return db
    ? Promise.resolve(db)
    : mongodb.connect(process.env.MONGODB_URL, options)
      .then((conn) => {
        db = conn.db('gubank');
        return db
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
};
