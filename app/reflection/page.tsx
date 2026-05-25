import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { MotionReveal } from "../../components/MotionReveal";
import { ReflectionChat } from "../../components/ReflectionChat";
import { reflectionPrompts } from "../../data/journey";

export default function ReflectionPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">AI Reflection Guide</p>
          <h1 className="page-title">A guided conversation for self-discovery.</h1>
          <p className="page-copy">
            The guide asks questions around the journey: what sparked interest, what information
            was found, what options compete, what blocks action, and what small step feels safe.
          </p>
        </MotionReveal>
        <Link className="button" href="/focus">
          Direction Focus <ArrowRight size={18} />
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
          <p className="eyebrow">Prompt map</p>
          <h2>Questions follow the uncertainty journey.</h2>
          <div className="prompt-stack">
            {reflectionPrompts.map((prompt, index) => (
              <div className="prompt-card" key={prompt}>
                <span>0{index + 1}</span>
                <p>{prompt}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </AppShell>
  );
}
