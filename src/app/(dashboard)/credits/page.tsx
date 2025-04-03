import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";

export default function CreditsPage() {
  return (
    <DashboardLayout activePath="/credits" title="Add Credits">
      <div>
        <div className="bg-green-500 text-white text-center py-2 px-4 rounded mb-6">
          You currently have 0 credits remaining
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Credit Package Card - 10 Credits */}
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 text-center">
              <div className="text-gray-600 mb-2">R 45</div>
              <div className="text-4xl font-medium">10</div>
              <div className="text-gray-600 text-sm mb-4">credits</div>
              <div className="text-xs text-gray-500 mt-auto">R 4.50 / per page</div>
            </div>
            <Button variant="secondary" className="mx-auto mb-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
              BUY
            </Button>
          </div>

          {/* Credit Package Card - 50 Credits */}
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 text-center">
              <div className="text-gray-600 mb-2">R 225</div>
              <div className="text-4xl font-medium">50</div>
              <div className="text-gray-600 text-sm mb-4">credits</div>
              <div className="text-xs text-gray-500 mt-auto">R 4.50 / per page</div>
            </div>
            <Button variant="secondary" className="mx-auto mb-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
              BUY
            </Button>
          </div>

          {/* Credit Package Card - 100 Credits */}
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 text-center">
              <div className="text-gray-600 mb-2">R 450</div>
              <div className="text-4xl font-medium">100</div>
              <div className="text-gray-600 text-sm mb-4">credits</div>
              <div className="text-xs text-gray-500 mt-auto">R 4.50 / per page</div>
            </div>
            <Button variant="secondary" className="mx-auto mb-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
              BUY
            </Button>
          </div>

          {/* Credit Package Card - 500 Credits */}
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 text-center">
              <div className="text-gray-600 mb-2">R 2250</div>
              <div className="text-4xl font-medium">500</div>
              <div className="text-gray-600 text-sm mb-4">credits</div>
              <div className="text-xs text-gray-500 mt-auto">R 4.50 / per page</div>
            </div>
            <Button variant="secondary" className="mx-auto mb-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
              BUY
            </Button>
          </div>

          {/* Credit Package Card - 1000 Credits */}
          <div className="bg-white border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 text-center">
              <div className="text-gray-600 mb-2">R 4500</div>
              <div className="text-4xl font-medium">1000</div>
              <div className="text-gray-600 text-sm mb-4">credits</div>
              <div className="text-xs text-gray-500 mt-auto">R 4.50 / per page</div>
            </div>
            <Button variant="secondary" className="mx-auto mb-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-600">
              BUY
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
