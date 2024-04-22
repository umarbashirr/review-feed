import SingleReviewCard from "@/app/(admin)/_components/single-review-card";

const RecentReviewsContainer = () => {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-4">
      <h3 className="text-xl font-medium capitalize mb-5">
        Most Recent Reviews
      </h3>
      <div className="flex flex-col gap-5">
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
      </div>
    </div>
  );
};

export default RecentReviewsContainer;
