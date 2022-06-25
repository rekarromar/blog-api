const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://rekarromar:vOhAYLYSwGVi66Xq@cluster0.bphmdps.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(connection.connection.host);
  } catch (err) {
    console.log(err);
    process.exit;
  }
};

module.exports = connectDB;
