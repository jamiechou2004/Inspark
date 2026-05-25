import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
import { MotionReveal } from "../../components/MotionReveal";
import { ReflectionChat } from "../../components/ReflectionChat";
import { reflectionPrompts } from "../../data/journey";

export default function ReflectionPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">
            <BilingualText en="AI Reflection Guide" zh="AI 反思引导" />
          </p>
          <h1 className="page-title">
            <BilingualText en="A guided conversation for self-discovery." zh="一场用于自我探索的引导式对话。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="The guide asks questions around the journey: what sparked interest, what information was found, what options compete, what blocks action, and what small step feels safe."
              zh="它会围绕探索旅程提问：兴趣从哪里来、看过哪些信息、正在比较什么、为什么还没行动，以及哪一步足够小、可以开始。"
            />
          </p>
        </MotionReveal>
        <Link className="button" href="/focus">
          <BilingualText en="Direction Focus" zh="方向聚焦" /> <ArrowRight size={18} />
        </Link>
      </div>

      <div className="reflection-layout">
        <MotionReveal>
          <ReflectionChat />
        </MotionReveal>
        <MotionReveal className="guide-panel card" delay={0.1}>
          <span className="icon-chip">
            <Lightbulb size={18} />
          </span>
          <p className="eyebrow">
            <BilingualText en="Prompt map" zh="问题地图" />
          </p>
          <h2>
            <BilingualText en="Questions follow the uncertainty journey." zh="问题会沿着不确定感的旅程展开。" />
          </h2>
          <div className="prompt-stack">
            {reflectionPrompts.map((prompt, index) => (
              <div className="prompt-card" key={prompt.en}>
                <span>0{index + 1}</span>
                <p>
                  <BilingualText en={prompt.en} zh={prompt.zh} />
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </AppShell>
  );
}
