import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { MotionReveal } from "../../components/MotionReveal";
import { onboardingFields } from "../../data/journey";

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">Calm onboarding</p>
          <h1 className="page-title">Start with what feels unclear.</h1>
          <p className="page-copy">
            No pressure to define a future. Inspark first learns where uncertainty is coming from,
            what has already been tried, and what kind of support would help now.
          </p>
        </MotionReveal>
        <Link className="button" href="/reflection">
          Continue to reflection <ArrowRight size={18} />
        </Link>
      </div>

      <section className="onboarding-shell">
        <MotionReveal className="progress-panel card">
          <div className="progress-ring">1/4</div>
          <div>
            <p className="eyebrow">Current focus</p>
            <h2>Make uncertainty visible</h2>
            <p>
              These choices are not permanent. They simply help the AI Reflection Guide ask better
              questions and avoid generic advice.
            </p>
          </div>
        </MotionReveal>

        <div className="onboarding-fields">
          {onboardingFields.map((field, index) => (
            <MotionReveal className="question-card card" delay={index * 0.06} key={field.label}>
              <div className="question-top">
                <span>{index + 1}</span>
                <div>
                  <h2>{field.label}</h2>
                  <p>{field.helper}</p>
                </div>
              </div>
              <div className="chip-grid">
                {field.options.map((option, optionIndex) => (
                  <button className={`choice-chip${optionIndex === 0 ? " selected" : ""}`} type="button" key={option}>
                    {optionIndex === 0 ? <Check size={15} /> : <Sparkles size={14} />}
                    {option}
                  </button>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
