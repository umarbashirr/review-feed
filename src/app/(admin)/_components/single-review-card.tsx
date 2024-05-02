"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SingleReviewCardProps {
  rating: number;
  name: string;
  email: string;
  phoneNumber: string;
  logoUrl: string;
  companyName: string;
  designation: string;
  roomNumber: string;
  createdAt: string;
  feedback: string;
}

const SingleReviewCard = ({
  rating,
  name,
  email,
  phoneNumber,
  logoUrl,
  companyName,
  designation,
  roomNumber,
  createdAt,
  feedback,
}: SingleReviewCardProps) => {
  const getInitialsIfImageNotThere = (name: string) => {
    if (!name) return "";
    const nameArray = name?.split(" ");
    return nameArray?.length > 1
      ? `${nameArray[0][0]}${nameArray[1][0]}`
      : `${nameArray[0][0]}`;
  };

  return (
    <article className="relative flex items-start justify-start gap-4 p-4 rounded-md border">
      <div className="absolute top-3 right-3">
        <p className="rotate-12">{rating}/5</p>
      </div>
      <Avatar>
        <AvatarImage src={logoUrl} />
        <AvatarFallback>{getInitialsIfImageNotThere(name)}</AvatarFallback>
      </Avatar>
      <div>
        <div className="mb-2">
          <h4 className="text-lg font-medium leading-5">{name}</h4>
          <p className="text-sm text-muted-foreground">
            Posted on {new Date(createdAt).toDateString()}
          </p>
        </div>
        <p>{feedback}</p>
        {/* Rest information as small capsules with label only if value is there */}
        <div className="flex flex-wrap gap-2 mt-2">
          {/* {email && (
            <span className="text-xs text-muted-foreground">
              Email: {email}
            </span>
          )}
          {phoneNumber && (
            <span className="text-xs text-muted-foreground">
              Phone: {phoneNumber}
            </span>
          )} */}
          {companyName && (
            <span className="text-xs text-muted-foreground">
              Company: {companyName}
            </span>
          )}
          {designation && (
            <span className="text-xs text-muted-foreground">
              Designation: {designation}
            </span>
          )}
          {roomNumber && (
            <span className="text-xs text-muted-foreground">
              Room: {roomNumber}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleReviewCard;
