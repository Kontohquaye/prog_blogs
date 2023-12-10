import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  // else
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to Db successfully");
  } catch (error) {
    console.log(error);
    throw new Error("failed to connect to database");
  }
};

export default connect;
