import { IHotelForm } from "@/interfaces/hotel-form.interface";

export const standardReviewForms: IHotelForm[] = [
  {
    title: "Standard Form",
    description:
      "This is a standard form for review which help you collect name, email, rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "review",
    formCategory: "standard",
    fields: [
      {
        label: "Name",
        placeholder: "Enter your name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Rating",
        type: "rating",
        name: "rating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
  {
    title: "Hotel Review Form",
    description:
      "This is a hotel review form which help you collect guest name, email, room number, rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "review",
    formCategory: "hotel",
    fields: [
      {
        label: "Guest Name",
        placeholder: "Enter guest name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Room Number",
        placeholder: "Enter room number",
        type: "text",
        name: "roomNumber",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Rating",
        type: "rating",
        name: "rating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
  {
    title: "Restaurant Review Form",
    description:
      "This form helps you collect customer name, email, meal rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "review",
    formCategory: "restaurant",
    fields: [
      {
        label: "Customer Name",
        placeholder: "Enter your name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Meal Rating",
        type: "rating",
        name: "mealRating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
  {
    title: "Service Feedback Form",
    description:
      "This form helps you collect customer name, email, service rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "feedback",
    formCategory: "service",
    fields: [
      {
        label: "Customer Name",
        placeholder: "Enter your name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Service Rating",
        type: "rating",
        name: "serviceRating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
  {
    title: "Web Agency Work Review Form",
    description:
      "This form helps you collect client name, email, project rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "review",
    formCategory: "webAgency",
    fields: [
      {
        label: "Client Name",
        placeholder: "Enter your name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Project Rating",
        type: "rating",
        name: "projectRating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
  {
    title: "Product Feedback Form",
    description:
      "This form helps you collect customer name, email, product rating, and feedback.",
    isActive: true,
    isStandard: true,
    formType: "feedback",
    formCategory: "product",
    fields: [
      {
        label: "Customer Name",
        placeholder: "Enter your name",
        type: "text",
        name: "name",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        isActive: true,
        shouldDisabled: false,
      },
      {
        label: "Product Rating",
        type: "rating",
        name: "productRating",
        isActive: true,
        shouldDisabled: false,
        min: 1,
        max: 5,
      },
      {
        label: "Feedback",
        placeholder: "Enter your feedback",
        type: "textarea",
        name: "feedback",
        isActive: true,
        shouldDisabled: false,
      },
    ],
  },
];
