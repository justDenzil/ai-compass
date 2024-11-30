interface ProfileCompletionProps {
  profile: {
    name: string;
    expertise: string[];
    completionScore: number;
  };
}

export function ProfileCompletion({ profile }: ProfileCompletionProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Profile Overview
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              Profile Completion
            </span>
            <span className="text-sm font-medium text-blue-600">
              {profile.completionScore}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${profile.completionScore}%` }}
            />
          </div>
        </div>
        
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{profile.name}</dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500">Expertise</dt>
            <dd className="mt-1">
              <ul className="flex flex-wrap gap-2">
                {profile.expertise.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}