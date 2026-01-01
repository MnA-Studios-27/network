import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the Network Pathfinder AI by MNA Studios.
Our mission: Helping people find what they love and turning that into a Dreamer → Creator → Service → Product empire.

STRATEGY:
- If the user is unsure of their niche, act as a creative strategist. Ask a clarifying question or suggest high-ceiling paths based on general interests.
- INSPIRATION: Use our current cohort as benchmarks:
  - AnM Studios (Niche: Hip-Hop Infrastructure/Recording for rappers).
  - Verse Studios (Niche: Sonic Branding/Creative jingles for B2B brands).
  - Algorhythm (Niche: Music Curation/Indie discovery communities).
- FUNNEL: Map their interest through DREAMER → CREATOR (Media IP) → SERVICE (Agency) → PRODUCT (D2C/Tech).

RULES:
1. RESPONSE LENGTH: EXTREMELY SHORT. Maximum 2-3 punchy sentences. 
2. FORMAT: No fluff. No long bullet points.
3. TONE: Elite, high-frequency, professional, yet inspiring.
4. RESIDENCY: We provide the infrastructure (studios/crew) 50/50. No upfront fees.

Example: "If you love storytelling, we can pivot from a Narrative Creator into a Content Strategy Agency—similar to how Verse Studios owns Sonic Branding. We provide the studio; you provide the voice."
`;

export class GeminiService {
  async generatePathfinderResponse(userPrompt: string) {
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.0-flash-exp',
        systemInstruction: SYSTEM_INSTRUCTION
      });

      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        },
      });

      const response = result.response;
      return response.text() || "Connection lost. Re-syncing vision...";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The signal is weak. Ensure your vision is clear and try again.";
    }
  }
}

export const geminiService = new GeminiService();
