"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, LogOut, Settings, User} from "lucide-react"; 

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="h-6" />
      </div>
      <div className="flex items-center gap-4">
        <Bell className="h-6 w-6 text-black" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              
              <Avatar className="h-8 w-8 bg-black">
                <AvatarImage src="/avatars/01.png" alt="@johndoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem className="flex flex-col items-start">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">charles@srcc.com</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User className="h-4 w-4 text-black" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Settings className="h-4 w-4 text-black" />
            Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
            <LogOut className="h-4 w-4 text-black" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
