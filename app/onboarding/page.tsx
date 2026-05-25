import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
import { MotionReveal } from "../../components/MotionReveal";
import { onboardingFields } from "../../data/journey";

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">
            <BilingualText en="Calm onboarding" zh="低压力引导" />
          </p>
          <h1 className="page-title">
            <BilingualText en="Start with what feels unclear." zh="从你不确定的地方开始。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="No pressure to define a future. Inspark first learns where uncertainty is coming from, what has already been tried, and what kind of support would help now."
              zh="不需要立刻定义未来。Inspark 会先理解你的不确定来自哪里、已经尝试过什么，以及现在最需要哪种支持。"
            />
          </p>
        </MotionReveal>
        <Link className="button" href="/reflection">
          <BilingualText en="Continue to reflection" zh="继续反思" /> <ArrowRight size={18} />
        </Link>
      </div>

      <section className="onboarding-shell">
        <MotionReveal className="progress-panel card">
          <div className="progress-ring">1/4</div>
          <div>
            <p className="eyebrow">
              <BilingualText en="Current focus" zh="当前重点" />
            </p>
            <h2>
              <BilingualText en="Make uncertainty visible" zh="把不确定感变得可见" />
            </h2>
            <p>
              <BilingualText
                en="These choices are not permanent. They simply help the AI Reflection Guide ask better questions and avoid generic advice."
                zh="这些选择都不是最终答案。它们只是帮助 AI Reflection Guide 提出更好的问题，避免泛泛而谈。"
              />
            </p>
          </div>
        </MotionReveal>

        <div className="onboarding-fields">
          {onboardingFields.map((field, index) => (
            <MotionReveal className="question-card card" delay={index * 0.06} key={field.label}>
              <div className="question-top">
                <span>{index + 1}</span>
                <div>
                  <h2>
                    <BilingualText en={field.label} zh={field.labelZh} />
                  </h2>
                  <p>
                    <BilingualText en={field.helper} zh={field.helperZh} />
                  </p>
                </div>
              </div>
              <div className="chip-grid">
                {field.options.map((option, optionIndex) => (
                  <button className={`choice-chip${optionIndex === 0 ? " selected" : ""}`} type="button" key={option}>
                    {optionIndex === 0 ? <Check size={15} /> : <Sparkles size={14} />}
                    <BilingualText en={option} zh={field.optionsZh[optionIndex]} />
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
