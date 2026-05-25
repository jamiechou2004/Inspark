import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, MessageCircle, PenLine, Users } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { MotionReveal } from "../../components/MotionReveal";
import { plan30Day, plan7Day, taskTypes } from "../../data/journey";

const taskIcons = {
  learn: BookOpen,
  talk: Users,
  build: PenLine,
  reflect: MessageCircle
};

export default function PlanPage() {
  return (
    <AppShell>
      <div className="page-intro compact">
        <MotionReveal>
          <p className="eyebrow">Validation Plan</p>
          <h1 className="page-title">Turn a direction into concrete action.</h1>
          <p className="page-copy">
            The plan lowers the cost of starting. It gives students a short sequence of learn,
            talk, build, and reflect tasks before they decide whether to continue.
          </p>
        </MotionReveal>
        <Link className="button" href="/progress">
          Check progress <ArrowRight size={18} />
        </Link>
      </div>

      <section className="plan-layout">
        <MotionReveal className="card plan-card-large">
          <div className="card-heading">
            <span className="icon-chip">
              <CalendarDays size={18} />
            </span>
            <div>
              <p className="eyebrow">7-day exploration plan</p>
              <h2>UX Research validation sprint</h2>
            </div>
          </div>
          <div className="timeline-list">
            {plan7Day.map((item, index) => (
              <div className="timeline-item" key={item.day}>
                <span>{item.day}</span>
                <div>
                  <strong>{item.type}</strong>
                  <p>{item.task}</p>
                </div>
                <i style={{ height: `${Math.max(28, 74 - index * 5)}%` }} />
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="plan-side">
          <MotionReveal className="card plan-card" delay={0.08}>
            <p className="eyebrow">30-day direction testing plan</p>
            <h2>Build evidence slowly enough to notice fit.</h2>
            <ul className="clean-list">
              {plan30Day.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal className="task-grid" delay={0.14}>
            {taskTypes.map((task) => {
              const Icon = taskIcons[task.type as keyof typeof taskIcons];
              return (
                <article className="task-card card" key={task.label}>
                  <Icon size={18} />
                  <h3>{task.label}</h3>
                  <p>{task.text}</p>
                </article>
              );
            })}
          </MotionReveal>
        </div>
      </section>

      <MotionReveal className="checkpoint-banner card">
        <p className="eyebrow">Checkpoint question</p>
        <h2>After seven days, does this direction feel more clear, less clear, or unchanged?</h2>
        <p>The answer is useful either way. The goal is better evidence, not instant certainty.</p>
      </MotionReveal>
    </AppShell>
  );
}
