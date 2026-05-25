export type Opportunity = {
  title: string;
  type: string;
  description: string;
  time: string;
  mode: string;
  fitScore: number;
  tone: "insight" | "reflection" | "growth";
};

export const mockOpportunities: Opportunity[] = [
  {
    title: "Climate Data Story Sprint",
    type: "Project",
    description:
      "Turn public climate data into a short interactive brief for students and local organizers.",
    time: "2 weeks",
    mode: "Remote",
    fitScore: 94,
    tone: "growth"
  },
  {
    title: "Behavioral Research Lab Shadow",
    type: "Mentorship",
    description:
      "Join a weekly lab session to observe how researchers design studies about decisions and habits.",
    time: "4 sessions",
    mode: "Hybrid",
    fitScore: 88,
    tone: "insight"
  },
  {
    title: "Civic Tech Product Jam",
    type: "Challenge",
    description:
      "Prototype a student-facing tool that makes a public service easier to understand and use.",
    time: "Weekend",
    mode: "In person",
    fitScore: 91,
    tone: "reflection"
  }
];
