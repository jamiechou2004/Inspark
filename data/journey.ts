export const journeyStages = [
  {
    title: "产生兴趣",
    english: "Interest",
    thought: "我好像对这个方向有点兴趣，但不确定是不是适合我。",
    guidance: "Use guided reflection to name why the interest matters.",
    signal: "Vague curiosity becomes a clear exploration question."
  },
  {
    title: "搜索信息",
    english: "Search",
    thought: "信息很多，但我不知道哪些对我有用。",
    guidance: "Turn scattered resources into structured exploration signals.",
    signal: "Courses, posts, advice, and stories become comparable evidence."
  },
  {
    title: "比较方向",
    english: "Compare",
    thought: "每个方向看起来都有可能，但我不知道应该优先试哪个。",
    guidance: "Compare fit, validation needs, risk, and first experiments.",
    signal: "The next direction is chosen for testing, not as a final identity."
  },
  {
    title: "尝试行动",
    english: "Act",
    thought: "我知道要行动，但不知道第一步该做什么。",
    guidance: "Generate a low-pressure 7-day and 30-day validation plan.",
    signal: "Direction becomes concrete tasks: learn, talk, build, reflect."
  },
  {
    title: "反思调整",
    english: "Reflect",
    thought: "我做完了，但不知道这说明我适不适合这个方向。",
    guidance: "Use checkpoints to decide whether to continue, pause, or pivot.",
    signal: "Experience becomes confidence, questions, and a better next test."
  }
];

export const onboardingFields = [
  {
    label: "What are you currently uncertain about?",
    helper: "Choose the uncertainty that feels closest right now.",
    options: ["Major choice", "Career direction", "Internship path", "Research vs. industry", "Portfolio ideas"]
  },
  {
    label: "What direction are you curious about?",
    helper: "It can be broad, incomplete, or just a feeling.",
    options: ["UX Research", "Product Strategy", "Learning Design", "Climate Tech", "Startup ideas"]
  },
  {
    label: "What have you already tried?",
    helper: "Small signals count. Reading, conversations, classes, and projects all matter.",
    options: ["Read articles", "Talked to seniors", "Took a class", "Joined a club", "Built a small project"]
  },
  {
    label: "What support do you need right now?",
    helper: "Inspark will adapt the next step around this need.",
    options: ["Ask better questions", "Filter information", "Compare options", "Make an action plan", "Reflect after trying"]
  }
];

export const reflectionPrompts = [
  "What sparked your interest in this direction?",
  "What information have you already looked at?",
  "What options are you comparing right now?",
  "What is stopping you from taking action?",
  "What would be a small next step you feel comfortable trying?"
];

export const suggestedAnswers = [
  "I noticed I enjoy understanding why people make decisions.",
  "I have read posts and course pages, but they all sound useful.",
  "I am comparing UX research, product, and education design.",
  "I do not know what a small first project should look like."
];

export const directions = [
  {
    name: "UX Research",
    confidence: 82,
    fit: "This direction may be worth testing because you keep returning to people, behavior, and how decisions are made.",
    validate: "Do you enjoy ambiguity, interviews, synthesis, and turning messy input into clear product insight?",
    experiment: "Run three 20-minute student interviews about course planning, then synthesize patterns into one insight memo.",
    risk: "Research can feel slow if you mainly want to ship visible products quickly.",
    accent: "purple"
  },
  {
    name: "Product Strategy",
    confidence: 76,
    fit: "Your interest in systems, tradeoffs, and communication suggests a possible fit with prioritizing product direction.",
    validate: "Can you compare user needs, market signals, constraints, and timing without needing a perfect answer?",
    experiment: "Pick one student problem and write a one-page product brief with audience, problem, bet, and success signal.",
    risk: "It may feel abstract without enough hands-on product or user evidence.",
    accent: "blue"
  },
  {
    name: "Learning Experience Design",
    confidence: 71,
    fit: "You seem drawn to making complex ideas easier to understand, especially in student-centered contexts.",
    validate: "Do you enjoy designing learning sequences, feedback moments, and clear explanations over time?",
    experiment: "Create a 15-minute mini lesson that helps first-year students compare three academic paths.",
    risk: "This path can be overlooked because it sounds less trendy than product or AI roles.",
    accent: "green"
  }
];

export const plan7Day = [
  { day: "Day 1", task: "Write down why this direction interests you.", type: "Reflect" },
  { day: "Day 2", task: "Read one beginner resource and capture three useful signals.", type: "Learn" },
  { day: "Day 3", task: "Interview one senior student or professional.", type: "Talk" },
  { day: "Day 4", task: "Try a small project with a visible output.", type: "Build" },
  { day: "Day 5", task: "Reflect on energy, fit, and moments of resistance.", type: "Reflect" },
  { day: "Day 6", task: "Compare this direction with one alternative.", type: "Compare" },
  { day: "Day 7", task: "Decide whether to continue, pause, or pivot.", type: "Checkpoint" }
];

export const plan30Day = [
  "Week 1: Learn the basics and define one validation question.",
  "Week 2: Talk to three people who have real experience in the direction.",
  "Week 3: Build a small artifact that tests the work, not just the idea.",
  "Week 4: Review evidence and choose continue, pause, pivot, or compare again."
];

export const taskTypes = [
  { label: "Learn task", type: "learn", text: "Read one grounded resource and extract useful signals." },
  { label: "Talk task", type: "talk", text: "Ask one senior student how the work feels day to day." },
  { label: "Build task", type: "build", text: "Create a small artifact that makes the direction tangible." },
  { label: "Reflect task", type: "reflect", text: "Notice energy, friction, and what felt meaningful." }
];

export const checkpoints = [
  "Did this task give you energy or drain you?",
  "What did you learn about yourself?",
  "Does this direction feel more clear, less clear, or unchanged?",
  "What should you test next?"
];

export const progressSignals = [
  { label: "Clarity", value: 68, type: "target" },
  { label: "Evidence", value: 54, type: "search" },
  { label: "Energy", value: 74, type: "sparkles" },
  { label: "Next step readiness", value: 81, type: "lightbulb" }
];
