const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `[db.js]: MongoDB connected: ${conn.connection.host}`.yellow.underline
    );
  } catch (err) {
    console.log(`[db.js]: Error: ${err.message}`.red);
    process.exit(1);
  }
};
module.exports = connectDb;
