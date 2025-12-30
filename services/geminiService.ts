
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIQuoteSuggestion = async (requirements: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert technical consultant for Prime Cubicles. Based on these user requirements: "${requirements}", provide a professional recommendation including:
      1. Suggested Material (HPL, Compact Laminate, or Board Based)
      2. Estimated durability profile
      3. Key benefit of this choice.
      Keep it professional, concise, and focused on lead conversion.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Thank you for your interest! Our team will review your requirements and get back to you with a detailed quote shortly.";
  }
};
