import { Form } from "@remix-run/react";

interface ConversationalFormProps {
  question: string;
  onSubmit: (response: string) => void;
  isSubmitting: boolean;
}

export function ConversationalForm({
  question,
  onSubmit,
  isSubmitting,
}: ConversationalFormProps) {
  return (
    <Form method="post" onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = formData.get("response") as string;
      onSubmit(response);
    }}>
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-blue-700">{question}</p>
        </div>
        
        <div>
          <label htmlFor="response" className="sr-only">
            Your response
          </label>
          <textarea
            id="response"
            name="response"
            rows={4}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Type your response here..."
            required
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? "Analyzing..." : "Continue"}
          </button>
        </div>
      </div>
    </Form>
  );
}