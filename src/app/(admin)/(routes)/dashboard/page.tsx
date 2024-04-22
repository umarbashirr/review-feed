import AnalyticsCard from "./_components/analytics-card";
import RecentReviewsContainer from "./_components/recent-reviews-container";

const DashboardPage = () => {
  return (
    <div className="py-3 px-6">
      <AnalyticsCard />
      <RecentReviewsContainer />
    </div>
  );
};

export default DashboardPage;
