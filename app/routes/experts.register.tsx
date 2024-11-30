import { json, type ActionFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { ConversationalForm } from "~/components/experts/ConversationalForm";
import { ExpertiseProgress } from "~/components/experts/ExpertiseProgress";
import { useExpertOnboarding } from "~/hooks/useExpertOnboarding";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const response = formData.get("response");
  
  // Process response and update expertise understanding
  return json({ success: true });
};

export default function ExpertRegister() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { currentQuestion, expertise, handleResponse } = useExpertOnboarding();
  const [responses, setResponses] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                Create Your Expert Profile
              </h1>
              
              <ExpertiseProgress score={expertise.score} />
              
              <div className="mt-8">
                <ConversationalForm
                  question={currentQuestion}
                  onSubmit={handleResponse}
                  isSubmitting={navigation.state === "submitting"}
                />
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Understanding Score: {expertise.score}%
                </h2>
                <div className="space-y-4">
                  {responses.map((response, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-md p-4 text-gray-700"
                    >
                      {response}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}