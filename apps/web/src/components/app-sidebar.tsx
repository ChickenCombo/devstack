import { LayoutDashboardIcon, UsersIcon } from "lucide-react";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";

const navMain = [
  {
    title: "User Management",
    url: "/user-management",
    icon: <UsersIcon />,
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <span className="font-semibold text-base">DevStack</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>

      {/* <SidebarFooter>{footerContent}</SidebarFooter> */}
    </Sidebar>
  );
}
