import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Search } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { OpportunityCard } from "../components/OpportunityCard";
import { mockOpportunities } from "../data/mockOpportunities";
import { mockProfile } from "../data/mockProfile";

export default function HomePage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <p className="eyebrow">AI-powered exploration</p>
          <h1 className="page-title">Discover what fits before choosing what&apos;s next.</h1>
          <p className="page-copy">
            Inspark helps students turn reflections into a living interest profile, then matches
            that profile with projects, mentors, programs, and next steps.
          </p>
        </div>
        <Link className="button" href="/onboarding">
          Begin <ArrowRight size={18} />
        </Link>
      </div>

      <section className="hero-panel">
        <div className="hero-visual">
          <div className="pill-row">
            <span className="pill orange">Warm intelligence</span>
            <span className="pill blue">Opportunity mapping</span>
            <span className="pill purple">Guided reflection</span>
          </div>

          <div className="section insight-board">
            {mockProfile.signals.map((signal) => (
              <div className="signal-card" key={signal.title}>
                <h3>{signal.title}</h3>
                <p>{signal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid">
          <div className="card card-padding">
            <div className="card-heading">
              <span className="icon-chip">
                <Lightbulb size={18} />
              </span>
              <div>
                <p className="eyebrow">Profile preview</p>
                <h2>{mockProfile.archetype}</h2>
              </div>
            </div>
            <p className="profile-summary">{mockProfile.summary}</p>
          </div>
          <div className="card card-padding">
            <div className="card-heading">
              <span className="icon-chip purple">
                <Search size={18} />
              </span>
              <div>
                <p className="eyebrow">Explore</p>
                <h2>Compare paths without locking in.</h2>
              </div>
            </div>
            <p className="profile-summary">
              Every recommendation includes fit reasoning, time commitment, and a practical first
              move.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card-heading">
          <span className="icon-chip green">
            <BookOpen size={18} />
          </span>
          <div>
            <p className="eyebrow">Suggested now</p>
            <h2>Opportunity matches</h2>
          </div>
        </div>
        <div className="grid three">
          {mockOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
