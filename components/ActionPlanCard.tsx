import { CalendarCheck, CircleDot, Target } from "lucide-react";

export type ActionPlanItem = {
  week: string;
  title: string;
  outcome: string;
  actions: string[];
};

export function ActionPlanCard({ item }: { item: ActionPlanItem }) {
  return (
    <article className="card card-padding action-card">
      <div className="card-heading">
        <span className="icon-chip green">
          <CalendarCheck size={18} />
        </span>
        <div>
          <p className="eyebrow">{item.week}</p>
          <h2>{item.title}</h2>
        </div>
      </div>
      <div className="plan-outcome">
        <Target size={18} />
        <span>{item.outcome}</span>
      </div>
      <ul className="action-list">
        {item.actions.map((action) => (
          <li key={action}>
            <CircleDot size={16} />
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
