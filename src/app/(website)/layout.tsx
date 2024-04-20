import React, { ReactNode } from "react";
import WebsiteHeader from "./_components/header";
import WebsiteFooter from "./_components/footer";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <WebsiteHeader />
      <main>{children}</main>
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteLayout;
