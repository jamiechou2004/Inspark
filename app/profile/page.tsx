import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "../../components/AppShell";
import { BilingualText } from "../../components/BilingualText";
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
          <p className="eyebrow">
            <BilingualText en="Interest profile" zh="兴趣画像" />
          </p>
          <h1 className="page-title">
            <BilingualText en="A student profile with useful edges." zh="一个保留边界感的学生探索画像。" />
          </h1>
          <p className="page-copy">
            <BilingualText
              en="Inspark summarizes strengths, fit areas, and growth edges so exploration becomes concrete without feeling fixed."
              zh="Inspark 会总结优势、可能匹配领域和成长边界，让探索更具体，但不把学生固定在某个标签里。"
            />
          </p>
        </div>
        <Link className="button" href="/focus">
          <BilingualText en="Compare directions" zh="比较方向" /> <ArrowRight size={18} />
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
              <p className="eyebrow">
                <BilingualText en="AI synthesis" zh="AI 综合分析" />
              </p>
              <h2>
                <BilingualText en="Why this profile fits" zh="为什么这个画像成立" />
              </h2>
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
        <p className="eyebrow">
          <BilingualText en="Exploration signals" zh="探索信号" />
        </p>
        <h2>
          <BilingualText en="Places to collect evidence without overcommitting" zh="在不过度承诺的前提下收集证据" />
        </h2>
        <div className="grid three">
          {mockOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
