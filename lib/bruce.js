import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function talkToBruce(userInput) {
  const systemPrompt = process.env.BRUCE_SYSTEM_PROMPT || "You are Bruce, the AI legacy assistant.";
  
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userInput },
    ],
  });

  return response.data.choices[0].message.content;
}
