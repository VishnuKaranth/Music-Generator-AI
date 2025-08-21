"use server"; 
// Marks this component as a server component (used in Next.js 13+ with the App Router).

import { UserButton } from "@daveyplate/better-auth-ui"; 
// Import a prebuilt authentication UI button for user profile / logout handling.

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"; 
// Import UI components for building a sidebar layout (custom UI library).

import { Credits } from "./credits"; 
// Component showing remaining credits or usage info.

import SidebarMenuItems from "./sidebar-menu-items"; 
// Custom component rendering sidebar navigation menu items.

import { User } from "lucide-react"; 
// Import a user icon from the lucide-react icon library.

import Upgrade from "./upgrade"; 
// Component that handles upgrade-to-premium or subscription option.


// Main Sidebar Component
export async function AppSidebar() {
  return (
    <Sidebar>
      {/* Main sidebar content */}
      <SidebarContent>
        <SidebarGroup>
          {/* App title / branding */}
          <SidebarGroupLabel className="text-primary mt-4 mb-12 flex flex-col items-start justify-start px-2 text-3xl font-black tracking-widest uppercase">
            <p>Music</p>
            <p className="text-lg">Generator AI</p>
          </SidebarGroupLabel>

          {/* Navigation Menu Items */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer section of the sidebar */}
      <SidebarFooter>
        {/* Credits and Upgrade button */}
        <div className="mb-2 flex w-full items-center justify-center gap-1 text-xs">
          <Credits />
          <Upgrade />
        </div>

        {/* User profile button with custom links */}
        <UserButton
          variant="outline"
          additionalLinks={[
            {
              label: "Customer Portal",   // Label for the link
              href: "/customer-portal",  // URL to navigate
              icon: <User />,            // User icon shown in the link
            },
          ]}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
