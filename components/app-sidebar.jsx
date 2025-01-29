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
      icon: "LayoutDashboard", 
    },
    {
      title: "Projects",
      url: "/projects/ProjectsList",
      icon: "FilePlus",
      items: [
        {
          title: "New Project",
          url: "/projects",
          icon: "FilePlus", 
        },
      ],
    },
    {
      title: "Budgets",
      url: "/budget",
      icon: "DollarSign", 
    },
    {
      title: "Contracts",
      url: "/contract",
      icon: "FileText", 
    },
    {
      title: "Claims",
      url: "/claim",
      icon: "FileCheck", 
    },
    {
      title: "Imprest",
      url: "/imprest",
      icon: "FileLock", 
    },
    {
      title: "Reports",
      url: "/report",
      icon: "BarChart2", 
    },
    {
      title: "Admin",
      url: "/admin",
      icon: "Users",
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
    <Sidebar   {...props}> 
    
    <SidebarHeader className=" p-6 bg-[#204c44] flex justify-center items-center">
  <SidebarMenu className="bg-[#204c44] w-full flex justify-center">
    <SidebarMenuItem className="bg-[#204c44] w-full flex justify-center">
      <SidebarMenuButton size="lg" asChild className="w-full flex justify-center">
        <a href="/dashboard" className="w-full flex justify-center">
          <Image
            src="/srcc_logo.webp" 
            width={100}
            height={100}
            alt="Help Center"
            className="rounded-md w-auto h-auto"
          />              
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarHeader>

      <SidebarContent className="bg-[#204c44] text-white">
        <SidebarGroup>
        <SidebarMenu className="gap-4 text-white">
  {data.navMain.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        className={`rounded-lg p-3.5 transition-all duration-200 ${
          isActive(item.url)
            ? "bg-white text-[#204c44] font-medium shadow-sm" // Active item styling
            : "hover:bg-white/20 text-white hover:text-gray-200"
        }`}
      >
        <a href={item.url} className="flex items-center">
          {item.icon && (
            <span className="mr-4 inline-flex">
              {(() => {
                const IconComponent = {
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
                }[item.icon];
                return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
              })()}
            </span>
          )}
          {item.title}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))}
</SidebarMenu>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-accent  bg-[#204c44]">
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
