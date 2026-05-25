import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { ProgressSteps } from "../../components/ProgressSteps";
import { ReflectionChat } from "../../components/ReflectionChat";
import { onboardingSteps } from "../../data/mockQuestions";

export default function ReflectionPage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <p className="eyebrow">Guided reflection</p>
          <h1 className="page-title">A calm conversation that finds patterns.</h1>
          <p className="page-copy">
            The reflection experience feels more like a thoughtful advisor than a form, helping
            students notice durable interests and useful constraints.
          </p>
        </div>
        <Link className="button" href="/profile">
          View profile <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid two">
        <ReflectionChat />
        <div className="grid">
          <ProgressSteps steps={onboardingSteps} currentStep={2} />
          <section className="card card-padding">
            <p className="eyebrow">Live synthesis</p>
            <h2>Emerging themes</h2>
            <div className="section pill-row">
              <span className="pill orange">Systems thinking</span>
              <span className="pill blue">Research synthesis</span>
              <span className="pill purple">Clear communication</span>
              <span className="pill green">Public usefulness</span>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
