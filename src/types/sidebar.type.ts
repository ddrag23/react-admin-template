import { ReactNode } from "react";

export type SidebarItem = {
  title: string;
  path: string;
  icon?: ReactNode;
  hasChildren?: boolean;
  childrens?: SidebarItem[];
};
