import { redirect } from "next/navigation";

export default function LogoutPage() {
  // In a real app, you would handle the logout here
  // For now, we'll just redirect to the dashboard
  redirect("/");
}
