"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { NavBar } from "@/components/nav-bar";
import { useAuth } from "@/context/auth-context";

interface DashboardLayoutProps {
  children: ReactNode;
  activePath?: string;
  title?: string;
}

export function DashboardLayout({
  children,
  activePath = "",
  title = "Dashboard"
}: DashboardLayoutProps) {
  const { user } = useAuth();

  return (
    <div>
      <NavBar />

      <div className="dashboard-layout">
        <Sidebar activePath={activePath} />

        <main className="main-content min-h-screen">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold font-montserrat">{title}</h1>

            {user && (
              <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                {user.credits} Credits Remaining
              </div>
            )}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
