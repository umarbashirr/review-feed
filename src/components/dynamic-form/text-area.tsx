"use client";

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface TextInputFieldProps {
  onChange: (e: any) => void;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const TextAreaCustom = ({
  onChange,
  label,
  name,
  type,
  placeholder = "",
}: TextInputFieldProps) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <textarea
        className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        rows={7}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaCustom;
