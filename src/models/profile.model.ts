import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    avatarURL: {
      type: String,
    },
    address: {
      locality: String,
      addressLine: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
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
      type: Schema.Types.ObjectId,
      ref: "Stripe",
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
