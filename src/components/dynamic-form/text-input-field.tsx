"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TextInputFieldProps {
  isLoading: boolean;
  label: string;
  name: string;
  type: string;
  onChange: (e: any) => void;
  placeholder?: string;
}

const TextInputField = ({
  isLoading,
  label,
  name,
  type,
  onChange,
  placeholder = "",
}: TextInputFieldProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <input
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInputField;
