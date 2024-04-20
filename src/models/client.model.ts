import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      trim: true,
    },
    clientEmail: {
      type: String,
      unique: true,
      trim: true,
    },
    clientPhoneNumber: {
      type: String,
    },
    clientLogo: {
      type: String,
    },
    clientCompanyName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);

export default Client;
