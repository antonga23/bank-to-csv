"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/convert"
              className={`text-sm font-medium transition ${pathname === '/convert' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
            >
              Convert PDF
            </Link>
            <Link
              href="/statements"
              className={`text-sm font-medium transition ${pathname === '/statements' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
            >
              Statement History
            </Link>
            <Link
              href="/credits"
              className={`text-sm font-medium transition ${pathname === '/credits' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
            >
              Add Credits
            </Link>
            <Link
              href="/purchases"
              className={`text-sm font-medium transition ${pathname === '/purchases' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
            >
              Purchase History
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">{user.name}</span>
                    <div className="text-xs">{user.credits} Credits</div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="outline" onClick={logout} className="text-sm">
                    Log Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="outline" className="text-sm">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
