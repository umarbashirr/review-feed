import mongoose, { models } from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    logoUrl: {
      type: String,
    },
    companyName: {
      type: String,
    },
    designation: {
      type: String,
    },
    roomNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Review = models.Review || mongoose.model("Review", reviewSchema);

export default Review;
