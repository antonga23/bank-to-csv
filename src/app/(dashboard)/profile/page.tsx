import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardLayout activePath="/profile" title="My Profile">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <User className="text-indigo-400 mr-4" size={28} />
              <h2 className="text-xl font-medium text-gray-700">General Details</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Update and save your general personal information.
            </p>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-gray-400 text-xs">(This changes where correspondence is sent, as well as what email is used when signing in)</span>
                </label>
                <Input
                  className="w-full"
                  placeholder="Email address"
                  value="marketing@vboglobal.io"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name and surname
                </label>
                <Input
                  className="w-full"
                  placeholder="Full name"
                  value="Marketing vboglobal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company name
                </label>
                <Input
                  className="w-full"
                  placeholder="Company name"
                  value="vboglobal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile number
                </label>
                <Input
                  className="w-full"
                  placeholder="Mobile number"
                  value="+27726155754"
                />
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="xero-partner"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="xero-partner" className="ml-2 block text-sm text-gray-700">
                  I am a Xero partner
                </label>
              </div>

              <div className="pt-3">
                <Button
                  className="w-full bg-blue-50 hover:bg-blue-100 text-gray-600"
                  variant="secondary"
                >
                  UPDATE
                </Button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-center">
              <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                Click here
              </a>
              <span className="text-sm text-gray-500"> to add a promotion code</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
