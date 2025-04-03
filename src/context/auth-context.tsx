"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

// Define the user type
export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
  credits: number;
}

// Define the context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (user: Omit<User, "id" | "credits">, password: string) => Promise<void>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth cookie name
const AUTH_COOKIE_NAME = 'auth';
const USER_STORAGE_KEY = 'swift_csv_user';

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is stored in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    const authCookie = Cookies.get(AUTH_COOKIE_NAME);

    if (storedUser && authCookie) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        // Clear invalid data
        localStorage.removeItem(USER_STORAGE_KEY);
        Cookies.remove(AUTH_COOKIE_NAME);
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate a successful login with dummy data
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0],
        credits: 0,
      };

      // Save user to localStorage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));

      // Set auth cookie (would be JWT in real app)
      Cookies.set(AUTH_COOKIE_NAME, 'authenticated', {
        expires: 7, // 7 days
        path: '/',
        sameSite: 'lax'
      });

      setUser(mockUser);
      router.refresh(); // Refresh to trigger middleware
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (userData: Omit<User, "id" | "credits">, password: string) => {
    setLoading(true);
    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate a successful signup with dummy data
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        ...userData,
        credits: 0,
      };

      // Save user to localStorage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));

      // Set auth cookie (would be JWT in real app)
      Cookies.set(AUTH_COOKIE_NAME, 'authenticated', {
        expires: 7, // 7 days
        path: '/',
        sameSite: 'lax'
      });

      setUser(mockUser);
      router.refresh(); // Refresh to trigger middleware
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    Cookies.remove(AUTH_COOKIE_NAME, { path: '/' });
    setUser(null);
    router.push('/');
    router.refresh(); // Refresh to trigger middleware
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
