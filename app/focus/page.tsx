import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2, FlaskConical, Gauge } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
import { MotionReveal } from "../../components/MotionReveal";
import { directions } from "../../data/journey";

export default function DirectionFocusPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">
            <BilingualText en="Direction Focus" zh="方向聚焦" />
          </p>
          <h1 className="page-title">
            <BilingualText en="Compare directions without forcing a final answer." zh="比较方向，但不急着给出最终答案。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="Inspark frames each possible path as a validation question. The goal is to choose what deserves priority exploration next."
              zh="Inspark 会把每个可能路径变成一个验证问题。目标是判断下一步最值得优先探索什么。"
            />
          </p>
        </MotionReveal>
        <Link className="button" href="/plan">
          <BilingualText en="Build validation plan" zh="生成验证计划" /> <ArrowRight size={18} />
        </Link>
      </div>

      <section className="direction-grid">
        {directions.map((direction, index) => (
          <MotionReveal className={`direction-card card ${direction.accent}`} delay={index * 0.06} key={direction.name}>
            <div className="direction-head">
              <div>
                <p className="eyebrow">
                  <BilingualText en="Possible direction" zh="可能方向" />
                </p>
                <h2>
                  <BilingualText en={direction.name} zh={direction.nameZh} />
                </h2>
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
                <h3>
                  <BilingualText en="Why it may fit you" zh="为什么可能适合你" />
                </h3>
                <p>
                  <BilingualText en={direction.fit} zh={direction.fitZh} />
                </p>
              </div>
            </div>
            <div className="direction-section">
              <FlaskConical size={18} />
              <div>
                <h3>
                  <BilingualText en="What to validate" zh="需要验证什么" />
                </h3>
                <p>
                  <BilingualText en={direction.validate} zh={direction.validateZh} />
                </p>
              </div>
            </div>
            <div className="direction-section">
              <ArrowRight size={18} />
              <div>
                <h3>
                  <BilingualText en="First small experiment" zh="第一个小实验" />
                </h3>
                <p>
                  <BilingualText en={direction.experiment} zh={direction.experimentZh} />
                </p>
              </div>
            </div>
            <div className="risk-note">
              <AlertCircle size={17} />
              <span>
                <BilingualText en={direction.risk} zh={direction.riskZh} />
              </span>
            </div>
          </MotionReveal>
        ))}
      </section>
    </AppShell>
  );
}
