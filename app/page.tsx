import Link from "next/link";
import { ArrowRight, CheckCircle2, GitCompare, Lightbulb, MessageCircle, PenLine, Search, Sparkles } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { MotionReveal } from "../components/MotionReveal";
import { directions, journeyStages } from "../data/journey";

const navigationIntent = [
  { label: "Interest", icon: Lightbulb },
  { label: "Search", icon: Search },
  { label: "Compare", icon: GitCompare },
  { label: "Act", icon: PenLine },
  { label: "Reflect", icon: MessageCircle }
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero-shell">
        <MotionReveal className="hero-copy">
          <p className="eyebrow">AI mentor for direction validation</p>
          <h1 className="page-title">Turn uncertainty into a clear path.</h1>
          <p className="hero-subtitle">用 AI 引导式交互，帮助学生从模糊兴趣走向清晰方向。</p>
          <p className="page-copy">
            Inspark does not give students more information to sort through. It gives structured
            guidance at each key moment: interest, search, comparison, action, and reflection.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/onboarding">
              Start reflection <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/focus">
              Compare directions <GitCompare size={18} />
            </Link>
          </div>
        </MotionReveal>

        <MotionReveal className="product-orbit card" delay={0.12}>
          <div className="orbit-glow" />
          <div className="mentor-card">
            <span className="icon-chip">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="eyebrow">Current uncertainty</p>
              <h2>&quot;I am curious about UX and product, but I do not know what to test first.&quot;</h2>
            </div>
          </div>
          <div className="signal-lane">
            {navigationIntent.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="signal-node" key={item.label}>
                  <span>
                    <Icon size={16} />
                  </span>
                  <strong>{item.label}</strong>
                  {index < navigationIntent.length - 1 ? <i /> : null}
                </div>
              );
            })}
          </div>
          <div className="insight-card">
            <p className="eyebrow">Suggested next test</p>
            <h3>Run three student interviews before choosing between UX Research and Product Strategy.</h3>
            <p>This direction may be worth testing based on your interest in systems, people, and problem-solving.</p>
          </div>
        </MotionReveal>
      </section>

      <section className="section narrative-section">
        <MotionReveal>
          <div className="section-heading">
            <p className="eyebrow">User journey</p>
            <h2>From a vague feeling to a validated next step.</h2>
          </div>
        </MotionReveal>
        <div className="journey-preview">
          {journeyStages.map((stage, index) => (
            <MotionReveal className="journey-card" delay={index * 0.05} key={stage.title}>
              <span className="journey-index">0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p className="journey-english">{stage.english}</p>
              <p>{stage.thought}</p>
              <strong>{stage.signal}</strong>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="section split-feature">
        <MotionReveal className="feature-panel">
          <p className="eyebrow">Structured decision support</p>
          <h2>Inspark helps students prioritize what to test, without pretending there is one final answer.</h2>
          <p>
            Each direction is framed as an experiment: why it may fit, what remains uncertain, and
            what small action can produce real evidence.
          </p>
        </MotionReveal>
        <div className="stacked-directions">
          {directions.map((direction, index) => (
            <MotionReveal className={`direction-mini ${direction.accent}`} delay={index * 0.08} key={direction.name}>
              <div>
                <h3>{direction.name}</h3>
                <p>{direction.fit}</p>
              </div>
              <span>{direction.confidence}%</span>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <CheckCircle2 size={22} />
        <h2>Start with one reflection. Leave with one testable direction.</h2>
        <Link className="button" href="/onboarding">
          Begin onboarding <ArrowRight size={18} />
        </Link>
      </section>
    </AppShell>
  );
}
