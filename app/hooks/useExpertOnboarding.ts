import { useState } from "react";
import { useAIQuestions } from "~/utils/ai.server";

interface ExpertiseState {
  score: number;
  areas: string[];
  confidence: number;
}

export function useExpertOnboarding() {
  const [expertise, setExpertise] = useState<ExpertiseState>({
    score: 0,
    areas: [],
    confidence: 0,
  });

  const [currentQuestion, setCurrentQuestion] = useState(
    "What are your main areas of expertise in AI?"
  );

  const handleResponse = async (response: string) => {
    // Update expertise understanding based on response
    setExpertise((prev) => ({
      ...prev,
      score: Math.min(prev.score + 10, 100),
    }));

    // Get next question based on current understanding
    const nextQuestion = await getNextQuestion(response, expertise);
    setCurrentQuestion(nextQuestion);
  };

  return {
    expertise,
    currentQuestion,
    handleResponse,
  };
}

async function getNextQuestion(response: string, expertise: ExpertiseState): Promise<string> {
  // This would integrate with GPT-4-mini to generate contextual questions
  const questions = [
    "What specific AI technologies do you work with?",
    "Can you describe your most challenging AI project?",
    "What industries have you applied AI solutions in?",
    "How do you approach AI model selection for different problems?",
    "What's your experience with deploying AI solutions at scale?",
  ];

  const nextIndex = Math.floor(Math.random() * questions.length);
  return questions[nextIndex];
}