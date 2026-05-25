import { Brain, Compass, LineChart } from "lucide-react";
import type { StudentProfile } from "../data/mockProfile";

export function InterestProfileCard({ profile }: { profile: StudentProfile }) {
  return (
    <article className="card card-padding profile-card">
      <div className="card-heading">
        <span className="icon-chip purple">
          <Brain size={18} />
        </span>
        <div>
          <p className="eyebrow">Interest profile</p>
          <h2>{profile.archetype}</h2>
        </div>
      </div>

      <p className="profile-summary">{profile.summary}</p>

      <div className="grid two">
        <div className="metric">
          <LineChart size={18} color="var(--growth-green)" />
          <strong>{profile.confidence}%</strong>
          <span className="muted">Profile confidence</span>
        </div>
        <div className="metric">
          <Compass size={18} color="var(--insight-blue)" />
          <strong>{profile.fitAreas.length}</strong>
          <span className="muted">Promising directions</span>
        </div>
      </div>

      <div className="profile-section">
        <h3>Core strengths</h3>
        <div className="pill-row">
          {profile.strengths.map((strength) => (
            <span className="pill orange" key={strength}>
              {strength}
            </span>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h3>Fit areas</h3>
        <div className="pill-row">
          {profile.fitAreas.map((area) => (
            <span className="pill blue" key={area}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
