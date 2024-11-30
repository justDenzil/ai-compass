import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Compass - Connect with AI Experts" },
    { name: "description", content: "Connect AI experts with businesses seeking AI solutions" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AI Compass</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Connect AI Experts with
            <span className="text-blue-600"> Business Innovation</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            AI Compass bridges the gap between AI experts and businesses seeking to
            integrate AI solutions. Find the perfect match for your AI journey.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/experts/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Join as an Expert
            </Link>
            <Link
              to="/business/register"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50"
            >
              Find AI Solutions
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Expert Profiles</h3>
            <p className="mt-2 text-gray-600">
              Create your AI expert profile and showcase your expertise to businesses
              seeking AI solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Smart Matching</h3>
            <p className="mt-2 text-gray-600">
              Our AI-powered system matches businesses with the most suitable experts
              based on their needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Lead Management</h3>
            <p className="mt-2 text-gray-600">
              Efficiently manage and track potential client interactions through our
              comprehensive dashboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}