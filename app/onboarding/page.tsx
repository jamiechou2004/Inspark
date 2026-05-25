import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { ProgressSteps } from "../../components/ProgressSteps";
import { onboardingSteps, reflectionQuestions } from "../../data/mockQuestions";

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <p className="eyebrow">Student onboarding</p>
          <h1 className="page-title">Start with context, not a checklist.</h1>
          <p className="page-copy">
            Inspark begins with the student&apos;s interests, constraints, energy, and early
            signals. The goal is a better first question, not a premature answer.
          </p>
        </div>
        <Link className="button" href="/reflection">
          Reflect <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid two">
        <ProgressSteps steps={onboardingSteps} currentStep={1} />

        <section className="card card-padding">
          <div className="card-heading">
            <span className="icon-chip">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="eyebrow">Maya, 11th grade</p>
              <h2>Early signals</h2>
            </div>
          </div>
          <div className="pill-row">
            <span className="pill orange">Climate</span>
            <span className="pill blue">Design</span>
            <span className="pill purple">Behavior</span>
            <span className="pill green">Public impact</span>
          </div>
        </section>
      </div>

      <section className="section grid two">
        {reflectionQuestions.map((question, index) => (
          <article className="card card-padding" key={question.id}>
            <div className="card-heading">
              <span className="icon-chip purple">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="eyebrow">Prompt {index + 1}</p>
                <h2>{question.prompt}</h2>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
