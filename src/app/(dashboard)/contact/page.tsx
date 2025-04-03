import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <DashboardLayout activePath="/contact" title="Contact Us">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-6 text-center">
            How can we help you?
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                className="w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                className="w-full"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-32"
                placeholder="How can we help you?"
              />
            </div>

            <div className="pt-3">
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                SUBMIT
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            We'll get back to you as soon as possible
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
