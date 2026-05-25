import type { ActionPlanItem } from "../components/ActionPlanCard";
import type { StudentProfile } from "../data/mockProfile";

export function generatePlan(profile: StudentProfile): ActionPlanItem[] {
  return [
    {
      week: "Week 1",
      title: "Choose one signal to test",
      outcome: `Validate whether ${profile.fitAreas[0].toLowerCase()} feels energizing in practice.`,
      actions: [
        "Pick one narrow question you want to answer.",
        "Find two examples from students, labs, or local organizations.",
        "Write a one-page brief with the audience, problem, and first experiment."
      ]
    },
    {
      week: "Week 2",
      title: "Build a small proof point",
      outcome: "Create evidence you can discuss with a mentor or opportunity lead.",
      actions: [
        "Make a lightweight prototype, memo, or visual explainer.",
        "Ask one peer and one adult for specific feedback.",
        "Revise the artifact based on what confused or excited them."
      ]
    },
    {
      week: "Week 3",
      title: "Convert insight into outreach",
      outcome: "Open a real conversation connected to a promising direction.",
      actions: [
        "Send a concise note to a mentor, lab, club, or program lead.",
        "Share the proof point and ask one focused question.",
        "Track what you learned and update your opportunity shortlist."
      ]
    }
  ];
}
