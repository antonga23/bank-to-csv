import { DashboardLayout } from "@/components/dashboard-layout";
import { CloudIcon } from "lucide-react";
import { db } from "@/lib/db";
import { ConvertForm } from "./convert-form";

export default async function ConvertPage() {
  const banksByCountry = await db.getBanksByCountry();

  return (
    <DashboardLayout activePath="/convert" title="Convert PDF">
      <div>
        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              1
            </div>
            <div className="text-sm mt-2 text-center text-indigo-500 font-medium">Upload</div>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              2
            </div>
            <div className="text-sm mt-2 text-center text-gray-500">Convert</div>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              3
            </div>
            <div className="text-sm mt-2 text-center text-gray-500">Download</div>
          </div>

          {/* Progress Line */}
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 -z-0">
            <div className="w-0 h-full bg-indigo-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <CloudIcon size={64} className="text-indigo-400 mb-4" />
              <h2 className="text-2xl font-medium mb-2">Upload PDF Statement</h2>
              <p className="text-gray-500 text-sm mb-6">
                Select the bank where these statements are from and upload your PDF statements.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ConvertForm banksByCountry={banksByCountry} />
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right mt-4">
          Select a file to see the credit cost
        </div>
      </div>
    </DashboardLayout>
  );
}
