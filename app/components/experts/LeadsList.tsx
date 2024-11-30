interface Lead {
  id: string;
  businessName: string;
  industry: string;
  aiNeeds: string;
  status: "new" | "contacted" | "in_progress" | "completed";
  createdAt: string;
}

interface LeadsListProps {
  leads: Lead[];
}

export function LeadsList({ leads }: LeadsListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {leads.map((lead) => (
          <li key={lead.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-blue-600 truncate">
                    {lead.businessName}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {lead.industry}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${
                      lead.status === "new"
                        ? "bg-green-100 text-green-800"
                        : lead.status === "contacted"
                        ? "bg-blue-100 text-blue-800"
                        : lead.status === "in_progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                    {lead.status.replace("_", " ").charAt(0).toUpperCase() + 
                     lead.status.slice(1).replace("_", " ")}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">{lead.aiNeeds}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}