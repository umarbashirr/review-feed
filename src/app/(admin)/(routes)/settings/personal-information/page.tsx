import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInformationForm from "../_components/personal-information-form";
import ChangePasswordForm from "../_components/change-password-form";

const PersonalInformationPage = () => {
  return (
    <div className="m-6 p-6 bg-white rounded-xl shadow-md">
      <div className="mb-10">
        <h1 className="text-xl font-medium mb-2">Settings</h1>
        <p className="text-sm text-muted-foreground">
          You can use these different tabs to customize your account information
        </p>
      </div>
      <div>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Personal Information</TabsTrigger>
            <TabsTrigger value="password">Change Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <PersonalInformationForm />
          </TabsContent>
          <TabsContent value="password">
            <ChangePasswordForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PersonalInformationPage;
