import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, Search, Sparkles, Target } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
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
          <p className="eyebrow">
            <BilingualText en="Progress Check-in" zh="进展复盘" />
          </p>
          <h1 className="page-title">
            <BilingualText en="Reflect before choosing the next move." zh="先复盘，再决定下一步。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="After a task is complete, Inspark helps students translate experience into direction confidence, self-knowledge, and the next test."
              zh="完成任务后，Inspark 帮学生把经历转化为方向信心、自我理解和下一次测试。"
            />
          </p>
        </MotionReveal>
        <Link className="button secondary" href="/profile">
          <BilingualText en="View profile" zh="查看画像" /> <ArrowRight size={18} />
        </Link>
      </div>

      <section className="progress-layout">
        <MotionReveal className="card checkin-card">
          <p className="eyebrow">
            <BilingualText en="Reflection checkpoint" zh="反思检查点" />
          </p>
          <h2>
            <BilingualText en="After your first UX Research interview" zh="完成第一次 UX 研究访谈后" />
          </h2>
          <div className="checkpoint-list">
            {checkpoints.map((question, index) => (
              <label className="checkpoint-input" key={question.en}>
                <span>{index + 1}</span>
                <div>
                  <strong>
                    <BilingualText en={question.en} zh={question.zh} />
                  </strong>
                  <textarea placeholder="Write a short reflection / 写下一个简短复盘..." rows={3} />
                </div>
              </label>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal className="card confidence-card" delay={0.1}>
          <p className="eyebrow">
            <BilingualText en="Direction confidence" zh="方向信心" />
          </p>
          <h2>
            <BilingualText en="Evidence is improving, but the direction is still being tested." zh="证据正在增加，但方向仍处在测试中。" />
          </h2>
          <div className="confidence-meter">
            <span style={{ width: "68%" }} />
          </div>
          <p className="meter-label">
            <BilingualText en="68% clearer than last week" zh="比上周清晰 68%" />
          </p>
          <div className="signal-meters">
            {progressSignals.map((signal) => {
              const Icon = signalIcons[signal.type as keyof typeof signalIcons];
              return (
                <div className="signal-meter" key={signal.label}>
                  <Icon size={17} />
                  <div>
                    <div>
                      <strong>
                        <BilingualText en={signal.label} zh={signal.labelZh} />
                      </strong>
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
            <span>
              <BilingualText
                en="Next test: compare interview energy with one product strategy artifact."
                zh="下一次测试：把访谈带来的能量感，与一个产品策略小产出进行比较。"
              />
            </span>
          </div>
        </MotionReveal>
      </section>
    </AppShell>
  );
}
