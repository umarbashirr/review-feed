import { redirect } from "next/navigation";

const SettingsPage = () => {
  redirect("settings/personal-information");
};

export default SettingsPage;
