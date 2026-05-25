import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { InterestProfileCard } from "../../components/InterestProfileCard";
import { OpportunityCard } from "../../components/OpportunityCard";
import { mockOpportunities } from "../../data/mockOpportunities";
import { generateProfile } from "../../lib/generateProfile";

const profile = generateProfile([
  "I like climate, design, and making complicated ideas easier to understand for other people."
]);

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <p className="eyebrow">Interest profile</p>
          <h1 className="page-title">A student profile with useful edges.</h1>
          <p className="page-copy">
            Inspark summarizes strengths, fit areas, and growth edges so exploration becomes
            concrete without feeling fixed.
          </p>
        </div>
        <Link className="button" href="/focus">
          Compare directions <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid two">
        <InterestProfileCard profile={profile} />
        <section className="card card-padding insight-board">
          <div className="card-heading">
            <span className="icon-chip">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="eyebrow">AI synthesis</p>
              <h2>Why this profile fits</h2>
            </div>
          </div>
          {profile.signals.map((signal) => (
            <div className="signal-card" key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="section">
        <p className="eyebrow">Exploration signals</p>
        <h2>Places to collect evidence without overcommitting</h2>
        <div className="grid three">
          {mockOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
