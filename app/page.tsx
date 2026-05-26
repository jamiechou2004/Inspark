import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Heart,
  MessageCircle,
  Quote,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";
import { AppShell } from "../components/AppShell";
import { BilingualText } from "../components/BilingualText";
import { MotionReveal } from "../components/MotionReveal";

const stages = [
  { label: "Interest", labelZh: "兴趣", icon: Heart, active: true },
  { label: "Search", labelZh: "搜索", icon: Search },
  { label: "Compare", labelZh: "比较", icon: Scale },
  { label: "Act", labelZh: "行动", icon: Rocket },
  { label: "Reflect", labelZh: "反思", icon: MessageCircle }
];

const directions = [
  { name: "UX Research", value: 86 },
  { name: "Product Strategy", value: 78 },
  { name: "Learning Experience Design", value: 72 }
];

const validationTasks = [
  { label: "Learn", labelZh: "学习", detail: "Explore key concepts and examples", detailZh: "了解关键概念和案例", icon: Heart },
  { label: "Talk", labelZh: "访谈", detail: "Connect with people and ask questions", detailZh: "联系真实用户并提问", icon: Users },
  { label: "Build", labelZh: "实践", detail: "Create something small and test", detailZh: "做一个小项目并测试", icon: Target },
  { label: "Reflect", labelZh: "反思", detail: "Capture insights and decide next steps", detailZh: "沉淀洞察并决定下一步", icon: MessageCircle }
];

const progressStats = [
  { label: "Clarity score", labelZh: "清晰度", detail: "How clear things feel", detailZh: "当前方向的清晰程度", value: "68", suffix: "/100", icon: Target },
  { label: "Energy level", labelZh: "能量水平", detail: "Your motivation today", detailZh: "今天的动力状态", value: "7.6", suffix: "/10", icon: Zap },
  {
    label: "Direction confidence",
    labelZh: "方向信心",
    detail: "Confidence in your path",
    detailZh: "对当前路径的信心",
    value: "62",
    suffix: "/100",
    icon: ShieldCheck
  }
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="dashboard-shell" aria-label="Inspark dashboard">
        <div className="dashboard-grid">
          <MotionReveal className="dashboard-card uncertainty-card">
            <div className="dashboard-kicker">
              <Sparkles size={15} />
              <BilingualText en="Current uncertainty" zh="当前不确定感" />
            </div>
            <div className="uncertainty-content">
              <h1 className="uncertainty-quote">
                <BilingualText
                  en='"I am curious about UX and product, but I do not know what to test first."'
                  zh="“我对 UX 和产品都有兴趣，但不知道应该先测试什么。”"
                />
              </h1>
              <div className="dashboard-float-icon">
                <Sparkles size={28} />
              </div>
            </div>
            <p className="dashboard-muted">
              <BilingualText en="Last updated today" zh="今天更新" /> ·{" "}
              <BilingualText en="Keep exploring, you're on the right track." zh="继续探索，你正在找到更清晰的路径。" />
            </p>

            <div className="stage-section">
              <div className="dashboard-card-header">
                <h2>
                  <BilingualText en="Exploration Stage" zh="探索阶段" />
                </h2>
              </div>
              <div className="stage-rail" aria-label="Exploration stage">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div className={`stage-node${stage.active ? " active" : ""}`} key={stage.label}>
                      <span className="stage-line" aria-hidden="true" />
                      <span className="stage-icon">
                        <Icon size={20} />
                      </span>
                      <strong>
                        <BilingualText en={stage.label} zh={stage.labelZh} />
                      </strong>
                      {index === stages.length - 1 ? <span className="stage-end" aria-hidden="true" /> : null}
                    </div>
                  );
                })}
              </div>
              <div className="stage-footer">
                <p>
                  <BilingualText
                    en="You're in the Interest stage. Explore freely and follow your curiosity."
                    zh="你处在兴趣阶段。先自由探索，并留意真正吸引你的问题。"
                  />
                </p>
                <Link className="mini-link" href="/progress">
                  <BilingualText en="View full journey" zh="查看完整旅程" />
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal className="dashboard-card next-step-card" delay={0.08}>
            <div className="dashboard-card-header">
              <h2>
                <BilingualText en="Today's Next Step" zh="今日下一步" />
              </h2>
            </div>
            <div className="next-step-body">
              <span className="dashboard-icon-square">
                <CalendarDays size={21} />
              </span>
              <p>
                <BilingualText
                  en="Run 3 student interviews to test UX Research."
                  zh="完成 3 次学生访谈，测试 UX Research 是否适合你。"
                />
              </p>
            </div>
            <Link className="dashboard-primary-button" href="/plan">
              <BilingualText en="Start step" zh="开始任务" />
              <ArrowRight size={16} />
            </Link>
          </MotionReveal>

          <MotionReveal className="dashboard-card direction-focus-card" delay={0.12}>
            <div className="dashboard-card-header">
              <h2>
                <BilingualText en="Direction Focus" zh="方向聚焦" />
              </h2>
              <Link href="/focus">
                <BilingualText en="View all" zh="查看全部" />
              </Link>
            </div>
            <div className="dashboard-direction-list">
              {directions.map((direction, index) => (
                <div className="dashboard-direction-row" key={direction.name}>
                  <span className="direction-rank">{index + 1}</span>
                  <div>
                    <div className="direction-row-top">
                      <strong>{direction.name}</strong>
                      <span>{direction.value}%</span>
                    </div>
                    <div className="dashboard-progress-track">
                      <span style={{ width: `${direction.value}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal className="dashboard-card validation-card" delay={0.16}>
            <div className="dashboard-card-header">
              <h2>
                <BilingualText en="Validation Plan" zh="验证计划" />
              </h2>
              <Link href="/plan">
                <BilingualText en="View plan" zh="查看计划" />
              </Link>
            </div>
            <div className="dashboard-task-list">
              {validationTasks.map((task) => {
                const Icon = task.icon;
                return (
                  <Link className="dashboard-task-row" href="/plan" key={task.label}>
                    <span className="dashboard-icon-square small">
                      <Icon size={16} />
                    </span>
                    <span>
                      <strong>
                        <BilingualText en={task.label} zh={task.labelZh} />
                      </strong>
                      <small>
                        <BilingualText en={task.detail} zh={task.detailZh} />
                      </small>
                    </span>
                    <ChevronRight size={16} />
                  </Link>
                );
              })}
            </div>
          </MotionReveal>

          <MotionReveal className="dashboard-card progress-card" delay={0.2}>
            <div className="dashboard-card-header">
              <h2>
                <BilingualText en="Progress Snapshot" zh="进展快照" />
              </h2>
            </div>
            <div className="dashboard-stat-list">
              {progressStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div className="dashboard-stat-row" key={stat.label}>
                    <span className="dashboard-icon-square small">
                      <Icon size={16} />
                    </span>
                    <span className="stat-copy">
                      <strong>
                        <BilingualText en={stat.label} zh={stat.labelZh} />
                      </strong>
                      <small>
                        <BilingualText en={stat.detail} zh={stat.detailZh} />
                      </small>
                    </span>
                    <span className="stat-value">
                      {stat.value}
                      <small>{stat.suffix}</small>
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="dashboard-muted compact">
              <BilingualText en="Keep going - small steps build real clarity." zh="继续前进，小步测试会带来真实清晰度。" />
            </p>
          </MotionReveal>

          <MotionReveal className="dashboard-card reflection-card" delay={0.24}>
            <div className="dashboard-card-header">
              <h2>
                <BilingualText en="Recent Reflection" zh="最近反思" />
              </h2>
              <Link href="/reflection">
                <BilingualText en="View all" zh="查看全部" />
              </Link>
            </div>
            <div className="reflection-quote-card">
              <Quote size={20} />
              <p>
                <BilingualText
                  en="I enjoyed talking to users and asking why they make certain choices. It felt really meaningful."
                  zh="我很享受和用户交流，并追问他们为什么做出某些选择。这让我觉得很有意义。"
                />
              </p>
              <small>
                <BilingualText en="Today, 9:41 AM" zh="今天 9:41" />
              </small>
            </div>
            <div className="streak-row">
              <span>
                <BookOpen size={18} />
                <BilingualText en="Reflection streak" zh="反思连续天数" />
              </span>
              <strong>
                5 <BilingualText en="days" zh="天" />
              </strong>
            </div>
          </MotionReveal>
        </div>
      </section>
    </AppShell>
  );
}
