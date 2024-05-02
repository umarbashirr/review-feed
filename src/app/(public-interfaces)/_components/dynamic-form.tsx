"use client";

import DynamicButton from "@/components/dynamic-form/dynamic-button";
import TextAreaCustom from "@/components/dynamic-form/text-area";
import TextInputField from "@/components/dynamic-form/text-input-field";
import { Form } from "@/components/ui/form";
import { FormFieldInterface } from "@/interfaces/form-field.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const DynamicForm = ({ data }: any) => {
  console.log(data);
  const schema = generateFormSchema(data?.fields);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.fields.reduce(
      (acc: any, field: FormFieldInterface) => {
        acc[field.name] = "";
        return acc;
      },
      {}
    ),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <div className="mt-8">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {data?.fields.map((field: FormFieldInterface) => {
              return (
                <div key={field.name}>
                  {(field.type === "text" ||
                    field.type === "email" ||
                    field.type === "number" ||
                    field.type === "password" ||
                    field.type === "tel") && (
                    <TextInputField
                      control={form.control}
                      isLoading={false}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                  {field.type === "textarea" && (
                    <TextAreaCustom
                      control={form.control}
                      isLoading={false}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              );
            })}
            <DynamicButton
              isLoading={form.formState.isSubmitting}
              loadingText="Submitting..."
              text="Submit"
              className="w-full ml-auto inline-block"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DynamicForm;

const generateFormSchema = (fields: FormFieldInterface[]) => {
  const schema: any = z.object({});

  fields.forEach((field: FormFieldInterface) => {
    if (field.type === "text") return (schema[field.name] = z.string());
    if (field.type === "email")
      return (schema[field.name] = z.string().email());
    if (field.type === "number") return (schema[field.name] = z.number());
    if (field.type === "password") return (schema[field.name] = z.string());
    if (field.type === "tel") return (schema[field.name] = z.string());
    if (field.type === "textarea") return;
  });

  return schema;
};
