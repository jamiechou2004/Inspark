export type StudentProfile = {
  name: string;
  archetype: string;
  summary: string;
  confidence: number;
  strengths: string[];
  fitAreas: string[];
  signals: {
    title: string;
    description: string;
  }[];
};

export const mockProfile: StudentProfile = {
  name: "Maya",
  archetype: "Systems Storyteller",
  summary:
    "You connect complex systems with human-centered communication. Your strongest pattern is translating research into clear narratives, prototypes, and practical next steps.",
  confidence: 86,
  strengths: ["Pattern recognition", "Visual communication", "Research synthesis", "Collaborative initiative"],
  fitAreas: ["Climate communication", "Product strategy", "Civic technology", "Behavioral research"],
  signals: [
    {
      title: "High curiosity signal",
      description: "Repeated interest in climate, design, decision-making, and public impact."
    },
    {
      title: "Preferred work mode",
      description: "Strong fit for structured ambiguity: open questions with a tangible output."
    },
    {
      title: "Growth edge",
      description: "Practice turning broad interests into scoped experiments with deadlines."
    }
  ]
};
