import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ActionPlanCard } from "../../components/ActionPlanCard";
import { AppShell } from "../../components/AppShell";
import { ProgressSteps } from "../../components/ProgressSteps";
import { onboardingSteps } from "../../data/mockQuestions";
import { mockProfile } from "../../data/mockProfile";
import { generatePlan } from "../../lib/generatePlan";

const plan = generatePlan(mockProfile);

export default function PlanPage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <p className="eyebrow">Action plan</p>
          <h1 className="page-title">Make exploration small enough to start.</h1>
          <p className="page-copy">
            The plan turns insight into lightweight experiments, proof points, and outreach that a
            student can complete alongside school.
          </p>
        </div>
        <Link className="button secondary" href="/">
          Back home <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid two">
        <ProgressSteps steps={onboardingSteps} currentStep={4} />
        <section className="card card-padding">
          <div className="card-heading">
            <span className="icon-chip green">
              <CheckCircle2 size={18} />
            </span>
            <div>
              <p className="eyebrow">Plan focus</p>
              <h2>{mockProfile.fitAreas[0]}</h2>
            </div>
          </div>
          <p className="profile-summary">
            The first cycle is designed to test fit quickly, produce a shareable artifact, and open
            one human conversation.
          </p>
        </section>
      </div>

      <section className="section grid three">
        {plan.map((item) => (
          <ActionPlanCard key={item.week} item={item} />
        ))}
      </section>
    </AppShell>
  );
}
