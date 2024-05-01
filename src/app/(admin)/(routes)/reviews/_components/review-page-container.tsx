"use client";

import SingleReviewCard from "@/app/(admin)/_components/single-review-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";

const ReviewPageContainer = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      label: "all reviews",
      value: 0,
    },
    {
      label: "positive reviews",
      value: 1,
    },
    {
      label: "negative reviews",
      value: 2,
    },
  ];

  function changeTab(value: number) {
    setCurrentTab(value);
  }

  return (
    <div>
      <div className="mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div>
          <div className="space-x-1 rounded-md shadow-sm border p-1">
            {tabs.map(({ label, value }: { label: string; value: number }) => {
              return (
                <Button
                  key={value}
                  onClick={() => changeTab(value)}
                  size="sm"
                  variant={currentTab === value ? "default" : "ghost"}
                  className="capitalize"
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="rounded-md shadow-sm border w-full max-w-[300px] flex items-center justify-start p-1 px-2 focus-within:max-w-[350px] focus-within:border-primary duration-300 ease-in-out transition-all">
          <input
            type="text"
            placeholder="Filter by title or name ...."
            className="w-full text-sm text-muted-foreground focus:outline-none "
          />
          <BiFilter className="shrink-0 w-6 h-6 text-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
      </div>
    </div>
  );
};

export default ReviewPageContainer;
