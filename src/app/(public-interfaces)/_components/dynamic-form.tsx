"use client";

import DynamicButton from "@/components/dynamic-form/dynamic-button";
import RatingField from "@/components/dynamic-form/rating-field";
import TextAreaCustom from "@/components/dynamic-form/text-area";
import TextInputField from "@/components/dynamic-form/text-input-field";
import { FormFieldInterface } from "@/interfaces/form-field.interface";
import React from "react";

const DynamicForm = React.memo(({ data }: any) => {
  // Let's manage the form fields values here based on form fields

  const [formFields, setFormFields] = React.useState<any>({});

  async function onSubmit(e: any) {
    e.preventDefault();
    console.log(formFields);
  }

  function handleInputChange(e: any) {
    setFormFields((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="mt-8">
      <div>
        <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
          {data?.fields.map((el: FormFieldInterface) => {
            return (
              <div key={el.name}>
                {(el.type === "text" ||
                  el.type === "email" ||
                  el.type === "number" ||
                  el.type === "password" ||
                  el.type === "tel") && (
                  <TextInputField
                    isLoading={false}
                    label={el.label}
                    name={el.name}
                    type={el.type}
                    placeholder={el.placeholder}
                    onChange={handleInputChange}
                  />
                )}
                {el.type === "textarea" && (
                  <TextAreaCustom
                    label={el.label}
                    name={el.name}
                    type={el.type}
                    placeholder={el.placeholder}
                    onChange={handleInputChange}
                  />
                )}
                {el.type === "rating" && (
                  <RatingField
                    label={el.label}
                    name={el.name}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            );
          })}
          <DynamicButton
            isLoading={false}
            loadingText="Submitting..."
            text="Submit"
            className="w-full ml-auto inline-block"
          />
        </form>
      </div>
    </div>
  );
});

export default DynamicForm;
