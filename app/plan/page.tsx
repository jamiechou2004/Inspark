import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, MessageCircle, PenLine, Users } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
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
          <p className="eyebrow">
            <BilingualText en="Validation Plan" zh="验证计划" />
          </p>
          <h1 className="page-title">
            <BilingualText en="Turn a direction into concrete action." zh="把方向变成可以执行的行动。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="The plan lowers the cost of starting. It gives students a short sequence of learn, talk, build, and reflect tasks before they decide whether to continue."
              zh="计划会降低开始行动的成本。学生先完成学习、沟通、制作和反思的小任务，再决定是否继续。"
            />
          </p>
        </MotionReveal>
        <Link className="button" href="/progress">
          <BilingualText en="Check progress" zh="查看进展" /> <ArrowRight size={18} />
        </Link>
      </div>

      <section className="plan-layout">
        <MotionReveal className="card plan-card-large">
          <div className="card-heading">
            <span className="icon-chip">
              <CalendarDays size={18} />
            </span>
            <div>
              <p className="eyebrow">
                <BilingualText en="7-day exploration plan" zh="7 天探索计划" />
              </p>
              <h2>
                <BilingualText en="UX Research validation sprint" zh="UX 研究验证冲刺" />
              </h2>
            </div>
          </div>
          <div className="timeline-list">
            {plan7Day.map((item, index) => (
              <div className="timeline-item" key={item.day}>
                <span>
                  <BilingualText en={item.day} zh={item.dayZh} />
                </span>
                <div>
                  <strong>
                    <BilingualText en={item.type} zh={item.typeZh} />
                  </strong>
                  <p>
                    <BilingualText en={item.task} zh={item.taskZh} />
                  </p>
                </div>
                <i style={{ height: `${Math.max(28, 74 - index * 5)}%` }} />
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="plan-side">
          <MotionReveal className="card plan-card" delay={0.08}>
            <p className="eyebrow">
              <BilingualText en="30-day direction testing plan" zh="30 天方向测试计划" />
            </p>
            <h2>
              <BilingualText en="Build evidence slowly enough to notice fit." zh="用足够慢的节奏积累证据，才看得见匹配度。" />
            </h2>
            <ul className="clean-list">
              {plan30Day.map((item) => (
                <li key={item.en}>
                  <BilingualText en={item.en} zh={item.zh} />
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal className="task-grid" delay={0.14}>
            {taskTypes.map((task) => {
              const Icon = taskIcons[task.type as keyof typeof taskIcons];
              return (
                <article className="task-card card" key={task.label}>
                  <Icon size={18} />
                  <h3>
                    <BilingualText en={task.label} zh={task.labelZh} />
                  </h3>
                  <p>
                    <BilingualText en={task.text} zh={task.textZh} />
                  </p>
                </article>
              );
            })}
          </MotionReveal>
        </div>
      </section>

      <MotionReveal className="checkpoint-banner card">
        <p className="eyebrow">
          <BilingualText en="Checkpoint question" zh="检查点问题" />
        </p>
        <h2>
          <BilingualText en="After seven days, does this direction feel more clear, less clear, or unchanged?" zh="七天之后，这个方向变得更清晰、更模糊，还是没有变化？" />
        </h2>
        <p>
          <BilingualText en="The answer is useful either way. The goal is better evidence, not instant certainty." zh="无论答案是什么都有价值。目标是得到更好的证据，而不是立刻确定未来。" />
        </p>
      </MotionReveal>
    </AppShell>
  );
}
