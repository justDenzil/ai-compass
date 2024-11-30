import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateNextQuestion(
  previousResponses: string[],
  currentUnderstanding: any
): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI expert interviewer. Generate the next question to better understand the expert's AI capabilities.",
        },
        {
          role: "user",
          content: `Previous responses: ${JSON.stringify(previousResponses)}
                   Current understanding: ${JSON.stringify(currentUnderstanding)}
                   Generate next question:`,
        },
      ],
    });

    return completion.choices[0].message.content || "Could you elaborate on your AI expertise?";
  } catch (error) {
    console.error("Error generating question:", error);
    return "What other aspects of your AI expertise would you like to share?";
  }
}

export async function analyzeExpertise(responses: string[]): Promise<{
  score: number;
  understanding: any;
}> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Analyze the AI expert's responses and provide an understanding score and key insights.",
        },
        {
          role: "user",
          content: `Expert responses: ${JSON.stringify(responses)}`,
        },
      ],
    });

    const analysis = JSON.parse(completion.choices[0].message.content || "{}");
    return {
      score: analysis.score || 0,
      understanding: analysis.understanding || {},
    };
  } catch (error) {
    console.error("Error analyzing expertise:", error);
    return {
      score: 0,
      understanding: {},
    };
  }
}