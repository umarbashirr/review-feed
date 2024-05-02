"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingFieldProps {
  label: string;
  name: string;
  onChange: (e: any) => void;
}

const RatingField = ({ label, name, onChange }: RatingFieldProps) => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);
    onChange({ target: { name, value: ratingValue } });
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <div className="flex items-center justify-start space-x-2">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <input
                type="radio"
                name={name}
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
                className="hidden"
              />
              <FaStar
                className={cn(
                  "text-2xl",
                  ratingValue <= (hover || rating)
                    ? "fill-yellow-400"
                    : "stroke-primary stroke-2 fill-transparent"
                )}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RatingField;
