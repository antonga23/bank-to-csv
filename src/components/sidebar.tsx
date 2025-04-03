"use client";

import Link from "next/link";
import {
  DownloadCloud,
  FileClock,
  CreditCard,
  ShoppingCart,
  User,
  Mail,
  LogOut
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useAuth } from "@/context/auth-context";

interface SidebarProps {
  activePath: string;
}

export function Sidebar({ activePath }: SidebarProps) {
  const { logout } = useAuth();

  const menuItems = [
    {
      href: "/convert",
      label: "Convert PDF",
      icon: <DownloadCloud size={18} />
    },
    {
      href: "/statements",
      label: "Statement History",
      icon: <FileClock size={18} />
    },
    {
      href: "/credits",
      label: "Add Credits",
      icon: <CreditCard size={18} />
    },
    {
      href: "/purchases",
      label: "Purchase History",
      icon: <ShoppingCart size={18} />
    },
    {
      href: "/profile",
      label: "My Profile",
      icon: <User size={18} />
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <Mail size={18} />
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link href="/convert">
          <Logo width={120} height={35} />
        </Link>
      </div>

      <nav className="sidebar-menu flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar-menu-item ${item.href === activePath ? 'active' : ''}`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="px-3 mt-6">
        <button
          onClick={logout}
          className="sidebar-menu-item w-full text-left text-red-600 hover:bg-red-50"
        >
          <span><LogOut size={18} /></span>
          <span>Log Out</span>
        </button>
      </div>

      <div className="px-6 mt-8 text-xs text-gray-400">
        <div>© {new Date().getFullYear()} Swift CSV</div>
      </div>
    </div>
  );
}
