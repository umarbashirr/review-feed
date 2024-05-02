import SingleReviewCard from "@/app/(admin)/_components/single-review-card";
import { cookies } from "next/headers";

const fetchReviews = async () => {
  const cookieStore = cookies();
  const response = await fetch(
    process.env.NEXT_PUBLIC_APP_URL + "/api/reviews",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: `${cookieStore.get("token")?.value || ""}`,
      },
      cache: "no-cache",
    }
  );

  const result = await response.json();
  return result?.data;
};

const RecentReviewsContainer = async () => {
  const reviews = await fetchReviews();

  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-4">
      <h3 className="text-xl font-medium capitalize mb-5">
        Most Recent Reviews
      </h3>
      <div className="flex flex-col gap-5">
        {reviews?.map((review: any) => (
          <SingleReviewCard
            key={review._id}
            rating={review.rating}
            name={review.name}
            email={review.email}
            phoneNumber={review.phoneNumber}
            logoUrl={review.logoUrl}
            companyName={review.companyName}
            designation={review.designation}
            roomNumber={review.roomNumber}
            createdAt={review.createdAt}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentReviewsContainer;
