import { Send, Sparkles } from "lucide-react";
import { suggestedAnswers } from "../data/journey";

export function ReflectionChat() {
  return (
    <section className="reflection-chat card">
      <div className="chat-header">
        <div>
          <p className="eyebrow">AI Reflection Guide</p>
          <h2>Let&apos;s understand the uncertainty before choosing a path.</h2>
        </div>
        <span className="ai-glow-mark">
          <Sparkles size={18} />
        </span>
      </div>

      <div className="message-stack">
        <div className="reflection-prompt-card">
          <span>Current moment: 产生兴趣</span>
          <strong>What sparked your interest in this direction?</strong>
          <p>Try naming the moment, person, class, project, or problem that made this feel worth exploring.</p>
        </div>
        <div className="message student">
          <p>
            I keep noticing that I enjoy understanding why people make decisions. I also like making
            messy ideas feel clear for other students.
          </p>
        </div>
        <div className="message ai">
          <strong>Inspark</strong>
          <p>
            That suggests a useful test: compare whether you enjoy learning from people directly,
            shaping product decisions, or designing clearer learning experiences.
          </p>
        </div>
        <div className="suggestion-row">
          {suggestedAnswers.map((answer) => (
            <button type="button" className="suggestion-chip" key={answer}>
              {answer}
            </button>
          ))}
        </div>
      </div>

      <form className="chat-input">
        <input aria-label="Reflection answer" placeholder="Write a quick reflection..." />
        <button className="send-button" type="button" aria-label="Send reflection">
          <Send size={17} />
        </button>
      </form>
    </section>
  );
}
