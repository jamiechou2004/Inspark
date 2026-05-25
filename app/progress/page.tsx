import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, Search, Sparkles, Target } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { MotionReveal } from "../../components/MotionReveal";
import { checkpoints, progressSignals } from "../../data/journey";

const signalIcons = {
  target: Target,
  search: Search,
  sparkles: Sparkles,
  lightbulb: Lightbulb
};

export default function ProgressPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">Progress Check-in</p>
          <h1 className="page-title">Reflect before choosing the next move.</h1>
          <p className="page-copy">
            After a task is complete, Inspark helps students translate experience into direction
            confidence, self-knowledge, and the next test.
          </p>
        </MotionReveal>
        <Link className="button secondary" href="/profile">
          View profile <ArrowRight size={18} />
        </Link>
      </div>

      <section className="progress-layout">
        <MotionReveal className="card checkin-card">
          <p className="eyebrow">Reflection checkpoint</p>
          <h2>After your first UX Research interview</h2>
          <div className="checkpoint-list">
            {checkpoints.map((question, index) => (
              <label className="checkpoint-input" key={question}>
                <span>{index + 1}</span>
                <div>
                  <strong>{question}</strong>
                  <textarea placeholder="Write a short reflection..." rows={3} />
                </div>
              </label>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal className="card confidence-card" delay={0.1}>
          <p className="eyebrow">Direction confidence</p>
          <h2>Evidence is improving, but the direction is still being tested.</h2>
          <div className="confidence-meter">
            <span style={{ width: "68%" }} />
          </div>
          <p className="meter-label">68% clearer than last week</p>
          <div className="signal-meters">
            {progressSignals.map((signal) => {
              const Icon = signalIcons[signal.type as keyof typeof signalIcons];
              return (
                <div className="signal-meter" key={signal.label}>
                  <Icon size={17} />
                  <div>
                    <div>
                      <strong>{signal.label}</strong>
                      <span>{signal.value}%</span>
                    </div>
                    <i>
                      <b style={{ width: `${signal.value}%` }} />
                    </i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="next-test">
            <CheckCircle2 size={18} />
            <span>Next test: compare interview energy with one product strategy artifact.</span>
          </div>
        </MotionReveal>
      </section>
    </AppShell>
  );
}
