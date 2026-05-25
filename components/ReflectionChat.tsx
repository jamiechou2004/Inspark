import { Send, Sparkles } from "lucide-react";
import { reflectionQuestions } from "../data/mockQuestions";

export function ReflectionChat() {
  return (
    <section className="reflection-chat card">
      <div className="chat-header">
        <div>
          <p className="eyebrow">AI reflection</p>
          <h2>Turn scattered interests into useful patterns.</h2>
        </div>
        <span className="brand-mark small">
          <Sparkles size={17} />
        </span>
      </div>

      <div className="message-stack">
        <div className="message ai">
          <strong>Inspark</strong>
          <p>{reflectionQuestions[0].prompt}</p>
        </div>
        <div className="message student">
          <p>
            I keep coming back to climate, design, and the way people make decisions. I like
            building things that make complicated ideas feel clear.
          </p>
        </div>
        <div className="message ai">
          <strong>Inspark</strong>
          <p>
            That points toward systems thinking with a communication edge. Let&apos;s test where
            you prefer to spend energy: research, prototyping, storytelling, or organizing people.
          </p>
        </div>
      </div>

      <form className="chat-input">
        <input aria-label="Reflection answer" placeholder="Write a quick reflection..." />
        <button className="button" type="button" aria-label="Send reflection">
          <Send size={17} />
        </button>
      </form>
    </section>
  );
}
