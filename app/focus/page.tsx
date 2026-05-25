import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2, FlaskConical, Gauge } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { MotionReveal } from "../../components/MotionReveal";
import { directions } from "../../data/journey";

export default function DirectionFocusPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">Direction Focus</p>
          <h1 className="page-title">Compare directions without forcing a final answer.</h1>
          <p className="page-copy">
            Inspark frames each possible path as a validation question. The goal is to choose what
            deserves priority exploration next.
          </p>
        </MotionReveal>
        <Link className="button" href="/plan">
          Build validation plan <ArrowRight size={18} />
        </Link>
      </div>

      <section className="direction-grid">
        {directions.map((direction, index) => (
          <MotionReveal className={`direction-card card ${direction.accent}`} delay={index * 0.06} key={direction.name}>
            <div className="direction-head">
              <div>
                <p className="eyebrow">Possible direction</p>
                <h2>{direction.name}</h2>
              </div>
              <div className="confidence-badge">
                <Gauge size={16} />
                {direction.confidence}%
              </div>
            </div>
            <div className="confidence-track">
              <span style={{ width: `${direction.confidence}%` }} />
            </div>
            <div className="direction-section">
              <CheckCircle2 size={18} />
              <div>
                <h3>Why it may fit you</h3>
                <p>{direction.fit}</p>
              </div>
            </div>
            <div className="direction-section">
              <FlaskConical size={18} />
              <div>
                <h3>What to validate</h3>
                <p>{direction.validate}</p>
              </div>
            </div>
            <div className="direction-section">
              <ArrowRight size={18} />
              <div>
                <h3>First small experiment</h3>
                <p>{direction.experiment}</p>
              </div>
            </div>
            <div className="risk-note">
              <AlertCircle size={17} />
              <span>{direction.risk}</span>
            </div>
          </MotionReveal>
        ))}
      </section>
    </AppShell>
  );
}
