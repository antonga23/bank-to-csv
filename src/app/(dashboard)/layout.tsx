import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swift CSV Dashboard",
  description: "Swift CSV - The superior choice for simplified financial data management",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}
