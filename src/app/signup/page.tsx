import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="py-4 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <SignupForm />

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-indigo-600"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-4 px-6 border-t bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          © Swift CSV, all rights reserved
        </div>
      </footer>
    </div>
  );
}
