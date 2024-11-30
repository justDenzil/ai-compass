interface DashboardStatsProps {
  stats: {
    totalLeads: number;
    activeConversations: number;
    completedProjects: number;
    averageResponseTime: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Leads
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {stats.totalLeads}
          </dd>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Active Conversations
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {stats.activeConversations}
          </dd>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Completed Projects
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {stats.completedProjects}
          </dd>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Avg. Response Time (hrs)
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {stats.averageResponseTime}
          </dd>
        </div>
      </div>
    </div>
  );
}