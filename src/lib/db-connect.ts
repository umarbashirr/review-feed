import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function connectMongo(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("DB connected successfully!");
  } catch (error) {
    console.error("DB connection error " + error);
    process.exit(1);
  }
}

export default connectMongo;
