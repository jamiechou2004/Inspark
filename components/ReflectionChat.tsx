import { Send, Sparkles } from "lucide-react";
import { suggestedAnswers } from "../data/journey";
import { BilingualText } from "./BilingualText";

export function ReflectionChat() {
  return (
    <section className="reflection-chat card">
      <div className="chat-header">
        <div>
          <p className="eyebrow">
            <BilingualText en="AI Reflection Guide" zh="AI 反思引导" />
          </p>
          <h2>
            <BilingualText en="Let's understand the uncertainty before choosing a path." zh="先理解不确定感，再选择路径。" />
          </h2>
        </div>
        <span className="ai-glow-mark">
          <Sparkles size={18} />
        </span>
      </div>

      <div className="message-stack">
        <div className="reflection-prompt-card">
          <span>
            <BilingualText en="Current moment: Interest" zh="当前阶段：产生兴趣" />
          </span>
          <strong>
            <BilingualText en="What sparked your interest in this direction?" zh="是什么激发了你对这个方向的兴趣？" />
          </strong>
          <p>
            <BilingualText
              en="Try naming the moment, person, class, project, or problem that made this feel worth exploring."
              zh="试着说出那个让你觉得值得探索的时刻、人物、课程、项目或问题。"
            />
          </p>
        </div>
        <div className="message student">
          <p>
            <BilingualText
              en="I keep noticing that I enjoy understanding why people make decisions. I also like making messy ideas feel clear for other students."
              zh="我发现自己很喜欢理解人为什么做决定，也喜欢把混乱的想法讲清楚，帮助其他学生理解。"
            />
          </p>
        </div>
        <div className="message ai">
          <strong>Inspark</strong>
          <p>
            <BilingualText
              en="That suggests a useful test: compare whether you enjoy learning from people directly, shaping product decisions, or designing clearer learning experiences."
              zh="这提示了一个有用测试：比较你更喜欢直接理解人、参与产品判断，还是设计更清晰的学习体验。"
            />
          </p>
        </div>
        <div className="suggestion-row">
          {suggestedAnswers.map((answer) => (
            <button type="button" className="suggestion-chip" key={answer.en}>
              <BilingualText en={answer.en} zh={answer.zh} />
            </button>
          ))}
        </div>
      </div>

      <form className="chat-input">
        <input aria-label="Reflection answer" placeholder="Write a quick reflection / 写下一个简短反思..." />
        <button className="send-button" type="button" aria-label="Send reflection">
          <Send size={17} />
        </button>
      </form>
    </section>
  );
}
