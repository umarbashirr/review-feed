import { cookies } from "next/headers";
import ReviewPageContainer from "./_components/review-page-container";

const fetchAllReviews = async () => {
  const cookieStore = cookies();
  const response = await fetch(
    process.env.NEXT_PUBLIC_APP_URL + "/api/reviews/all",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: `${cookieStore.get("token")?.value || ""}`,
      },
    }
  );
  const result = await response.json();
  return result?.data;
};

const ReviewsPage = async () => {
  const reviews = await fetchAllReviews();
  return (
    <div className="m-6 p-6 bg-white rounded-xl shadow-md">
      <ReviewPageContainer reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;
