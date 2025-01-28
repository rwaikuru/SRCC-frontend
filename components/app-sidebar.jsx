"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  FileText,
  FilePlus,
  FileCheck,
  Users,
  DollarSign,
  FileLock,
  BarChart2,
  Settings,
  Wallet,
} from "lucide-react";

import { NavUser } from "./nav-user";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: "LayoutDashboard", // Dashboard icon
    },
    {
      title: "Projects",
      url: "/projects/ProjectsList",
      icon: "FilePlus", // New project icon
      items: [
        {
          title: "New Project",
          url: "/projects",
          icon: "FilePlus", // New project icon
        },
      ],
    },
    {
      title: "Budgets",
      url: "/budget",
      icon: "DollarSign", // Budget icon
    },
    {
      title: "Contracts",
      url: "/contract",
      icon: "FileText", // Contracts icon
    },
    {
      title: "Claims",
      url: "/claim",
      icon: "FileCheck", // Claims icon
    },
    {
      title: "Imprest",
      url: "/imprest",
      icon: "FileLock", // Imprest icon (related to finances/approval)
    },
    {
      title: "Reports",
      url: "/report",
      icon: "BarChart2", // Reports icon (data/chart icon)
    },
    {
      title: "Admin",
      url: "/admin",
      icon: "Users", // Admin icon
    },
  ],
}

export function AppSidebar({ ...props }) {
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (url) => {
    if (url === "#") return false;
    return currentPath === url || currentPath.startsWith(url);
  };

  return (
    <Sidebar variant="inset" {...props}> 
    {/* className="bg-[#204c44]"  */}
      <SidebarHeader className="pb-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="">
                <Image
              src="/srcc_logo.webp" 
              width={50}
              height={50}
              alt="Help Center"
              className="rounded-md"
            />                </div>
                <div className="flex flex-col gap-0 leading-none">
                  <span className="text-xs">STRATHMORE SRCC</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-4">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`rounded-lg p-3.5 transition-all duration-200 hover:bg-accent/50 ${
                    isActive(item.url)
                      ? "bg-accent font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <a href={item.url} className="text-base">
                    {item.icon && (
                      <span
                        className={`mr-4 inline-flex ${
                          isActive(item.url)
                            ? "text-blue-600"
                            : "text-muted-foreground"
                        }`}
                      >
                        {(() => {
                          const iconProps = {
                            className: "h-5 w-5 transition-colors duration-200",
                          };
                          switch (item.icon) {
                            case "LayoutDashboard":
                              return <LayoutDashboard {...iconProps} />;
                            case "FileText":
                              return <FileText {...iconProps} />;
                            case "FilePlus":
                              return <FilePlus {...iconProps} />;
                            case "FileCheck":
                              return <FileCheck {...iconProps} />;
                            case "Users":
                              return <Users {...iconProps} />;
                            case "DollarSign":
                              return <DollarSign {...iconProps} />;
                            case "FileLock":
                              return <FileLock {...iconProps} />;
                            case "BarChart2":
                              return <BarChart2 {...iconProps} />;
                            default:
                              return null;
                          }
                        })()}
                      </span>
                    )}
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-9 mt-2.5 space-y-1.5 border-l border-muted pl-4">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`rounded-md p-2.5 transition-all duration-200 hover:bg-accent/50 ${
                            isActive(subItem.url)
                              ? "bg-accent font-medium text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <a href={subItem.url} className="text-sm">
                            {subItem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-accent rounded-md">
        <div className="p-4 mt-auto">
          <div className="bg-[#b4d304] rounded-lg flex flex-col items-center justify-center p-2">
            <Image
              src="/helpcentre.png" 
              width={50}
              height={50}
              alt="Help Center"
              className="rounded-md"
            />
            <p className="text-black font-bold mt-2 text-center">Help Center</p>
          </div>
        </div>
        <NavUser
          user={{
            name: "Charles Muhia",
            email: "charles@srcc.com",
            avatar: "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
