import { BiBarChart, BiBarChartAlt, BiHappy, BiSad } from "react-icons/bi";

const AnalyticsCard = () => {
  return (
    <div className="grid md:grid-cols-4 gap-10">
      <div className="w-full min-h-[120px] bg-white rounded-lg shadow-md flex items-center justify-start px-6 space-x-4">
        <div className="bg-yellow-100 p-2 inline-flex justify-center items-center rounded-full">
          <BiBarChart className="w-8 h-8 text-yellow-600" />
        </div>
        <div className="flex flex-grow items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Total Reviews</h3>
            <p className="text-xs text-muted-foreground">
              Overall feedbacks received
            </p>
          </div>
          <p className="text-4xl font-extrabold text-yellow-600">34</p>
        </div>
      </div>
      <div className="w-full min-h-[120px] bg-white rounded-lg shadow-md flex items-center justify-start px-6 space-x-4">
        <div className="bg-blue-100 p-2 inline-flex justify-center items-center rounded-full">
          <BiBarChartAlt className="w-8 h-8 text-blue-600" />
        </div>
        <div className="flex flex-grow items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Monthly Reviews</h3>
            <p className="text-xs text-muted-foreground">
              Received in last 30 days
            </p>
          </div>
          <p className="text-4xl font-extrabold text-blue-600">12</p>
        </div>
      </div>
      <div className="w-full min-h-[120px] bg-white rounded-lg shadow-md flex items-center justify-start px-6 space-x-4">
        <div className="bg-green-100 p-2 inline-flex justify-center items-center rounded-full">
          <BiHappy className="w-8 h-8 text-green-600" />
        </div>
        <div className="flex flex-grow items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Positive Reviews</h3>
            <p className="text-xs text-muted-foreground">
              Positive in last 30 days
            </p>
          </div>
          <p className="text-4xl font-extrabold text-green-600">10</p>
        </div>
      </div>
      <div className="w-full min-h-[120px] bg-white rounded-lg shadow-md flex items-center justify-start px-6 space-x-4">
        <div className="bg-red-100 p-2 inline-flex justify-center items-center rounded-full">
          <BiSad className="w-8 h-8 text-red-600" />
        </div>
        <div className="flex flex-grow items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Negative Reviews</h3>
            <p className="text-xs text-muted-foreground">
              Negative in last 30 days
            </p>
          </div>
          <p className="text-4xl font-extrabold text-red-600">02</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
