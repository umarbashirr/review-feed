"use client";

import { Button } from "@/components/ui/button";

interface CardProps {
  formId?: string;
  title: string;
  description?: string;
}

const SingleFormTemplateCard = ({ formId, title, description }: CardProps) => {
  return (
    <article className="border rounded-md shadow-sm p-4 flex flex-col">
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
      <div className="space-x-2 mt-4">
        <Button size="sm" variant="outline">
          Embed
        </Button>
        <Button size="sm" variant="outline">
          Copy url
        </Button>
      </div>
    </article>
  );
};

export default SingleFormTemplateCard;