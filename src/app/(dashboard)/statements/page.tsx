import { DashboardLayout } from "@/components/dashboard-layout";

export default function StatementsPage() {
  return (
    <DashboardLayout activePath="/statements" title="Statement History">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="py-12 text-center text-gray-500">
          No statement history found
        </div>
      </div>
    </DashboardLayout>
  );
}
