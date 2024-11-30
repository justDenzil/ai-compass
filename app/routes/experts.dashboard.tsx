import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DashboardStats } from "~/components/experts/DashboardStats";
import { LeadsList } from "~/components/experts/LeadsList";
import { ProfileCompletion } from "~/components/experts/ProfileCompletion";

interface LoaderData {
  expertProfile: {
    name: string;
    expertise: string[];
    completionScore: number;
  };
  leads: Array<{
    id: string;
    businessName: string;
    industry: string;
    aiNeeds: string;
    status: "new" | "contacted" | "in_progress" | "completed";
    createdAt: string;
  }>;
  stats: {
    totalLeads: number;
    activeConversations: number;
    completedProjects: number;
    averageResponseTime: number;
  };
}

export const loader: LoaderFunction = async () => {
  // Fetch expert profile, leads, and stats from DynamoDB
  const mockData: LoaderData = {
    expertProfile: {
      name: "Dr. Jane Smith",
      expertise: ["Machine Learning", "Computer Vision", "NLP"],
      completionScore: 85,
    },
    leads: [
      {
        id: "1",
        businessName: "Tech Corp",
        industry: "Healthcare",
        aiNeeds: "Patient diagnosis automation",
        status: "new",
        createdAt: new Date().toISOString(),
      },
      // Add more mock leads as needed
    ],
    stats: {
      totalLeads: 12,
      activeConversations: 3,
      completedProjects: 8,
      averageResponseTime: 4.5,
    },
  };

  return json(mockData);
};

export default function ExpertDashboard() {
  const { expertProfile, leads, stats } = useLoaderData<LoaderData>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Expert Dashboard
            </h1>
            
            <DashboardStats stats={stats} />
            
            <div className="mt-8">
              <LeadsList leads={leads} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ProfileCompletion profile={expertProfile} />
          </div>
        </div>
      </div>
    </div>
  );
}