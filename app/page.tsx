import Link from "next/link";
import { ArrowRight, CheckCircle2, GitCompare, Lightbulb, MessageCircle, PenLine, Search, Sparkles } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { BilingualText } from "../components/BilingualText";
import { MotionReveal } from "../components/MotionReveal";
import { directions, journeyStages } from "../data/journey";

const navigationIntent = [
  { label: "Interest", labelZh: "兴趣", icon: Lightbulb },
  { label: "Search", labelZh: "搜索", icon: Search },
  { label: "Compare", labelZh: "比较", icon: GitCompare },
  { label: "Act", labelZh: "行动", icon: PenLine },
  { label: "Reflect", labelZh: "反思", icon: MessageCircle }
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero-shell">
        <MotionReveal className="hero-copy">
          <p className="eyebrow">
            <BilingualText en="AI mentor for direction validation" zh="用于方向验证的 AI Mentor" />
          </p>
          <h1 className="page-title">
            <BilingualText en="Turn uncertainty into a clear path." zh="把不确定感变成清晰路径。" />
          </h1>
          <p className="hero-subtitle">
            <BilingualText
              en="AI-guided interaction that helps students move from vague interest to clear direction."
              zh="用 AI 引导式交互，帮助学生从模糊兴趣走向清晰方向。"
            />
          </p>
          <p className="page-copy">
            <BilingualText
              en="Inspark does not give students more information to sort through. It gives structured guidance at each key moment: interest, search, comparison, action, and reflection."
              zh="Inspark 的价值不是提供更多信息，而是在产生兴趣、搜索信息、比较方向、尝试行动和反思调整这些关键时刻，给学生结构化引导。"
            />
          </p>
          <div className="hero-actions">
            <Link className="button" href="/onboarding">
              <BilingualText en="Start reflection" zh="开始反思" /> <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/focus">
              <BilingualText en="Compare directions" zh="比较方向" /> <GitCompare size={18} />
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
              <p className="eyebrow">
                <BilingualText en="Current uncertainty" zh="当前不确定感" />
              </p>
              <h2>
                <BilingualText
                  en='"I am curious about UX and product, but I do not know what to test first."'
                  zh="“我对 UX 和产品都有兴趣，但不知道应该先测试哪个。”"
                />
              </h2>
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
                  <strong>
                    <BilingualText en={item.label} zh={item.labelZh} />
                  </strong>
                  {index < navigationIntent.length - 1 ? <i /> : null}
                </div>
              );
            })}
          </div>
          <div className="insight-card">
            <p className="eyebrow">
              <BilingualText en="Suggested next test" zh="建议的下一次测试" />
            </p>
            <h3>
              <BilingualText
                en="Run three student interviews before choosing between UX Research and Product Strategy."
                zh="在 UX 研究和产品策略之间做选择前，先完成三次学生访谈。"
              />
            </h3>
            <p>
              <BilingualText
                en="This direction may be worth testing based on your interest in systems, people, and problem-solving."
                zh="基于你对系统、人和问题解决的兴趣，这个方向值得先被测试。"
              />
            </p>
          </div>
        </MotionReveal>
      </section>

      <section className="section narrative-section">
        <MotionReveal>
          <div className="section-heading">
            <p className="eyebrow">
              <BilingualText en="User journey" zh="用户旅程" />
            </p>
            <h2>
              <BilingualText en="From a vague feeling to a validated next step." zh="从模糊感觉，到被验证的下一步。" />
            </h2>
          </div>
        </MotionReveal>
        <div className="journey-preview">
          {journeyStages.map((stage, index) => (
            <MotionReveal className="journey-card" delay={index * 0.05} key={stage.title}>
              <span className="journey-index">0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p className="journey-english">
                <BilingualText en={stage.english} zh={stage.guidanceZh} />
              </p>
              <p>{stage.thought}</p>
              <strong>
                <BilingualText en={stage.signal} zh={stage.signalZh} />
              </strong>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="section split-feature">
        <MotionReveal className="feature-panel">
          <p className="eyebrow">
            <BilingualText en="Structured decision support" zh="结构化决策支持" />
          </p>
          <h2>
            <BilingualText
              en="Inspark helps students prioritize what to test, without pretending there is one final answer."
              zh="Inspark 帮学生判断优先测试什么，而不是假装存在一个最终答案。"
            />
          </h2>
          <p>
            <BilingualText
              en="Each direction is framed as an experiment: why it may fit, what remains uncertain, and what small action can produce real evidence."
              zh="每个方向都会被拆成一个实验：为什么可能匹配、还需要验证什么，以及哪个小行动能产生真实证据。"
            />
          </p>
        </MotionReveal>
        <div className="stacked-directions">
          {directions.map((direction, index) => (
            <MotionReveal className={`direction-mini ${direction.accent}`} delay={index * 0.08} key={direction.name}>
              <div>
                <h3>
                  <BilingualText en={direction.name} zh={direction.nameZh} />
                </h3>
                <p>
                  <BilingualText en={direction.fit} zh={direction.fitZh} />
                </p>
              </div>
              <span>{direction.confidence}%</span>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <CheckCircle2 size={22} />
        <h2>
          <BilingualText en="Start with one reflection. Leave with one testable direction." zh="从一次反思开始，带走一个可测试的方向。" />
        </h2>
        <Link className="button" href="/onboarding">
          <BilingualText en="Begin onboarding" zh="开始引导" /> <ArrowRight size={18} />
        </Link>
      </section>
    </AppShell>
  );
}
