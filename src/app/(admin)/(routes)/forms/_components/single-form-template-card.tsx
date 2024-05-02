"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CardProps {
  formId: string;
  title: string;
  description?: string;
}

const SingleFormTemplateCard = ({ formId, title, description }: CardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  console.log(formId, title, description);

  function copyURL(formId: string) {
    const userFromStorage: any = window.localStorage.getItem("user");
    let user: any;
    if (userFromStorage) {
      user = JSON.parse(userFromStorage);
    }

    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_APP_URL}/form-templates/${user?.id}/${formId}`
    );
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <article className="border rounded-md shadow-sm p-4 flex flex-col">
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
      <div className="space-x-2 mt-4">
        <Button size="sm" variant="outline">
          Embed
        </Button>
        <Button
          size="sm"
          variant={!isCopied ? "outline" : "success"}
          onClick={() => copyURL(formId)}
        >
          {isCopied ? "Copied" : "Copy url"}
        </Button>
      </div>
    </article>
  );
};

export default SingleFormTemplateCard;
