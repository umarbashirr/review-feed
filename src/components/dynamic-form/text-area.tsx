"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface TextInputFieldProps {
  control: any;
  isLoading: boolean;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const TextAreaCustom = ({
  control,
  isLoading,
  label,
  name,
  type,
  placeholder = "",
}: TextInputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              disabled={isLoading}
              rows={5}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaCustom;
