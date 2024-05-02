import mongoose from "mongoose";

export interface AppFormInterface extends mongoose.Document {
  title: string;
  description: string;
  isActive: boolean;
  createdBy: any;
  isStandard: boolean;
  fields: formFieldInterface[];
}

export interface formFieldInterface {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  isActive: boolean;
  options: { key: string; value: string }[];
}

const formFieldSchema = {
  label: {
    type: String,
    required: true,
    trim: true,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  options: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
  shouldDisabled: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
};

const appFormSchema = new mongoose.Schema<AppFormInterface>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isStandard: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fields: [formFieldSchema],
  },
  {
    timestamps: true,
  }
);

const AppForm =
  mongoose.models.AppForm ||
  mongoose.model<AppFormInterface>("AppForm", appFormSchema);

export default AppForm;
