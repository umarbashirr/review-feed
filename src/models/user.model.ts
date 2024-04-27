import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordTokenExpiry: {
      type: String,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationTokenExpiry: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    avatarURL: {
      type: String,
    },
    companyName: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      locality: String,
      addressLine: String,
      city: String,
      state: String,
      country: String,
      zipcode: String,
    },
    hasTrialMode: {
      type: Boolean,
      default: true,
    },
    isPaidUser: {
      type: Boolean,
      default: false,
    },
    billingDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stripe",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
