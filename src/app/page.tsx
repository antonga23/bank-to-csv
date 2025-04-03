import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://ext.same-assets.com/967929407/3158482915.svg+xml"
            alt="Swift CSV Logo"
            width={120}
            height={35}
            priority
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            GET IN TOUCH
          </Link>

          <Link
            href="/login"
            className="inline-block border border-indigo-600 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-50"
          >
            LOG IN / SIGN UP
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 relative">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-indigo-600 mb-2 block">Transition to Swift CSV</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your shortcut to seamless financial management
            </h1>
            <p className="text-gray-600 mb-6">
              Yearning to transition from tiresome manual entry to digital transformation?<br />
              Swift CSV is your cutting-edge solution, converting your financial documents into digital format with accuracy, speed, and security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-sm font-medium"
              >
                REGISTER NOW
              </Link>

              <Link
                href="#contact"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-indigo-50"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://ext.same-assets.com/1616124809/1402909820.png"
              alt="Swift CSV Illustration"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
            <p className="text-gray-600">
              An uncomplicated, efficient, and secure path to superior financial data management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1.</span>
                <h3 className="text-xl font-semibold text-gray-900">Straightforward Registration</h3>
              </div>
              <p className="text-gray-600 ml-11">
                Kickstart your Swift CSV journey with a straightforward sign-up or login process. Our user-friendly interface ensures swift access to your account, priming you for a seamless data conversion experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2.</span>
                <h3 className="text-xl font-semibold text-gray-900">Flexible Credit Options</h3>
              </div>
              <p className="text-gray-600 ml-11">
                The power to convert bank statements to CSV files is just a credit purchase away. Available directly from your account dashboard, we offer a variety of credit packages, designed to accommodate your budget without compromising on quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3.</span>
                <h3 className="text-xl font-semibold text-gray-900">A Warm Welcome Awaits</h3>
              </div>
              <p className="text-gray-600 ml-11">
                Upon registration, expect a personalised welcome email from us. This invaluable guide navigates you through the onboarding process, furnishing you with key details and step-by-step instructions to get you up to speed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">4.</span>
                <h3 className="text-xl font-semibold text-gray-900">Simple Upload and Accurate Conversion</h3>
              </div>
              <p className="text-gray-600 ml-11">
                It's time to let your bank statements embrace the digital revolution. Upload your documents, and watch as our advanced conversion techniques ensure precise, error-free conversion to CSV files. Choose to download or directly integrate the data into your accounting software, ushering in an era of streamlined workflow.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-sm font-medium inline-block"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-indigo-600 font-medium">Our standard pricing plans:</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Exceptional value for every budget!
            </h2>
            <p className="text-gray-600 text-sm">Listed price excludes VAT/GST</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-10">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center">
                <Image
                  src="https://ext.same-assets.com/799694137/153277452.png"
                  alt="Per Page Icon"
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-700 mb-4">Per Page</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">R4.50</p>
                <Link
                  href="/signup"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center">
                <Image
                  src="https://ext.same-assets.com/799694137/153277452.png"
                  alt="50 Pages Icon"
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-700 mb-4">50 Pages</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">R225.00</p>
                <Link
                  href="/signup"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center">
                <Image
                  src="https://ext.same-assets.com/799694137/153277452.png"
                  alt="500 Pages Icon"
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-700 mb-4">500 Pages</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">R2 250.00</p>
                <Link
                  href="/signup"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-6 md:px-12 bg-blue-50">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-sm font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-indigo-600 font-medium mb-2">Hear it from our valued clients</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your success is our story!
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Swift CSV is the absolute best product I have ever had the privilege of encountering and enable me to do my work at amazingly fast speeds. Love it!
              </p>
              <div>
                <p className="font-medium text-gray-900">Joanne Coetsee</p>
                <p className="text-sm text-gray-500">joanne@simplisticaccounting.co.za</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center border-b border-gray-700 pb-6 mb-6">
            <Image
              src="https://ext.same-assets.com/967929407/3158482915.svg+xml"
              alt="Swift CSV Logo"
              width={100}
              height={30}
              className="brightness-0 invert"
            />
            <div className="text-sm">
              <a href="mailto:admin@swiftcsv.com" className="text-gray-300 hover:text-white">
                admin@swiftcsv.com
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            © Swift CSV, all rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
