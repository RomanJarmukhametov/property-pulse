import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  //   If database is alredy connected, don't connect again
  if (connected) {
    return;
  }

  //   Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '');
    connected = true;
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
