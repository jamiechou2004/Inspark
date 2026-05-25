import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import type { Opportunity } from "../data/mockOpportunities";

const toneClass = {
  insight: "blue",
  reflection: "purple",
  growth: "green"
};

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="card card-padding opportunity-card">
      <div className="opportunity-top">
        <span className={`pill ${toneClass[opportunity.tone]}`}>{opportunity.type}</span>
        <ArrowUpRight size={18} />
      </div>
      <h3>{opportunity.title}</h3>
      <p>{opportunity.description}</p>
      <div className="opportunity-meta">
        <span>
          <Clock3 size={15} />
          {opportunity.time}
        </span>
        <span>
          <MapPin size={15} />
          {opportunity.mode}
        </span>
      </div>
      <div>
        <div className="progress-track" aria-label={`${opportunity.fitScore}% fit`}>
          <div className="progress-fill" style={{ width: `${opportunity.fitScore}%` }} />
        </div>
        <small>{opportunity.fitScore}% fit with your current profile</small>
      </div>
    </article>
  );
}
