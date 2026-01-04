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
  private lastRequestTime: number = 0;
  private minRequestInterval: number = 2000; // 2 seconds between requests

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generatePathfinderResponse(userPrompt: string) {
    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
      
      if (!apiKey || apiKey === 'your_openrouter_api_key_here') {
        return "API key not configured. Please add your OpenRouter API key to continue.";
      }

      // Rate limiting: ensure minimum time between requests
      const now = Date.now();
      const timeSinceLastRequest = now - this.lastRequestTime;
      if (timeSinceLastRequest < this.minRequestInterval) {
        await this.delay(this.minRequestInterval - timeSinceLastRequest);
      }
      this.lastRequestTime = Date.now();

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Network by MNA Studios'
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.2-3b-instruct:free',
          messages: [
            {
              role: 'system',
              content: SYSTEM_INSTRUCTION
            },
            {
              role: 'user',
              content: userPrompt
            }
          ],
          temperature: 0.8,
          max_tokens: 200,
          top_p: 0.95,
        })
      });

      if (response.status === 429) {
        return "Taking a moment to process... Our AI is receiving high traffic. Please wait a few seconds and try again.";
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', response.status, errorData);
        return "Connection temporarily unavailable. The pathfinder is recalibrating—try again in a moment.";
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "Connection lost. Re-syncing vision...";
    } catch (error) {
      console.error("OpenRouter Error:", error);
      if (error instanceof Error && error.message.includes('fetch')) {
        return "Network connection lost. Check your internet and try again.";
      }
      return "The signal is weak. Ensure your vision is clear and try again.";
    }
  }
}

export const geminiService = new GeminiService();
