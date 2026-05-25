import { mockProfile } from "../data/mockProfile";

export function generateProfile(answers: string[]) {
  const depthBonus = answers.filter((answer) => answer.trim().length > 80).length * 2;

  return {
    ...mockProfile,
    confidence: Math.min(96, mockProfile.confidence + depthBonus)
  };
}
