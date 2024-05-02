import DynamicForm from "@/app/(public-interfaces)/_components/dynamic-form";
import Logo from "@/components/logo";

const fetchForm = async (workspaceId: string, formId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/templates/forms/${workspaceId}/${formId}`
  );
  const result = await response.json();
  return result?.data;
};

const SingleFormTemplatePage = async ({
  params,
}: {
  params: { workspaceId: string; formId: string };
}) => {
  const fetchedForm = await fetchForm(params?.workspaceId, params?.formId);

  return (
    <div className="px-6">
      <div className="border border-input rounded-xl shadow-md w-full h-full m-10 p-6 mx-auto">
        <header className="flex items-center justify-center">
          <Logo />
        </header>
        <DynamicForm data={fetchedForm} />
      </div>
    </div>
  );
};

export default SingleFormTemplatePage;
