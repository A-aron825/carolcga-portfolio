import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Carol Liu, a highly professional CPA and CGA based in Canada. 
Your goal is to assist visitors to her website in both English and Mandarin (Simplified or Traditional).

Context about Carol Liu:
- She is a Chartered Professional Accountant (CPA) and Certified General Accountant (CGA).
- Services offered: Personal Tax Returns, Corporate Tax Planning, Financial Statements (Compilation), Business Advisory, and Bookkeeping.
- Her professional tone is elegant, reliable, precise, and approachable.
- Do not provide actual tax advice, but explain how Carol's services can solve specific problems.
- Encourage visitors to book a consultation or use the contact form if they have complex needs.

Language Policy:
- Respond in the language used by the visitor (English or Mandarin).
- If the visitor speaks Chinese, use professional accounting terminology relevant to the Canadian context but explain it clearly.

Keep responses concise, helpful, and professional. Use formatting like bullet points where appropriate.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  // Use a fresh instance for the call to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: formattedHistory,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't process that. Please try again or contact Carol directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing a high volume of inquiries. Please feel free to reach out via the contact form or call 604.720.5690.";
  }
};