import React from "react";

import { SidebarRouteProps } from "types/components/layout/wrappers";

import Header from "components/header";
import Sidebar from "components/sidebar";

import Content from "../Content";
import MainBody from "../MainBody";

const SidebarRoute = ({ children }: SidebarRouteProps) => {
  return (
    <>
      <Sidebar />
      <MainBody>
        <Header />
        <Content>{children}</Content>
      </MainBody>
    </>
  );
};

export default SidebarRoute;
