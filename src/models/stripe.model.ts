import { Schema, model, models } from "mongoose";

const stripeSchema = new Schema({
  // Stripe customer ID
  customerId: {
    type: String,
    required: true,
  },

  // Stripe subscription ID
  subscriptionId: {
    type: String,
    required: true,
  },

  // Stripe plan ID
  planId: {
    type: String,
    required: true,
  },

  // Stripe card ID
  cardId: {
    type: String,
    required: true,
  },

  // Stripe billing address
  billingAddress: {
    type: Object,
    required: true,
  },

  // Stripe shipping address
  shippingAddress: {
    type: Object,
    required: true,
  },

  // Stripe coupon code
  couponCode: {
    type: String,
  },

  // Stripe discount amount
  discountAmount: {
    type: Number,
  },

  // Stripe tax amount
  taxAmount: {
    type: Number,
  },

  // Stripe total amount
  totalAmount: {
    type: Number,
  },

  // Stripe currency
  currency: {
    type: String,
    required: true,
  },

  // Stripe status
  status: {
    type: String,
    required: true,
  },

  // Stripe created at
  createdAt: {
    type: Date,
    required: true,
  },

  // Stripe updated at
  updatedAt: {
    type: Date,
    required: true,
  },
});

const Stripe = models.Stripe || model("Stripe", stripeSchema);

export default Stripe;
