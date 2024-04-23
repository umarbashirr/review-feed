import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SingleFormTemplateCard from "./_components/single-form-template-card";
import { RocketIcon } from "@radix-ui/react-icons";

const FormsListPage = () => {
  return (
    <div className="m-6 p-6 bg-white rounded-xl shadow-md">
      <Alert className="mb-8 bg-green-100">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          More form templates will be added soon.
        </AlertDescription>
      </Alert>

      <h2 className="text-xl font-bold capitalize">Prebuilt form templates</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <SingleFormTemplateCard
          title="Simple Form"
          description="This form will help you collect name, email, logo, rating and feedback."
        />
        <SingleFormTemplateCard
          title="Hotel Feedback Form"
          description="This form will help you collect guest name, email, room No, rating and feedback."
        />
      </div>
    </div>
  );
};

export default FormsListPage;
