export const journeyStages = [
  {
    title: "产生兴趣",
    english: "Interest",
    thought: "我好像对这个方向有点兴趣，但不确定是不是适合我。",
    guidance: "Use guided reflection to name why the interest matters.",
    guidanceZh: "用引导式反思说清楚这个兴趣为什么重要。",
    signal: "Vague curiosity becomes a clear exploration question.",
    signalZh: "模糊兴趣变成一个清晰的探索问题。"
  },
  {
    title: "搜索信息",
    english: "Search",
    thought: "信息很多，但我不知道哪些对我有用。",
    guidance: "Turn scattered resources into structured exploration signals.",
    guidanceZh: "把碎片化资源整理成可判断的探索信号。",
    signal: "Courses, posts, advice, and stories become comparable evidence.",
    signalZh: "课程、帖子、建议和经历变成可比较的证据。"
  },
  {
    title: "比较方向",
    english: "Compare",
    thought: "每个方向看起来都有可能，但我不知道应该优先试哪个。",
    guidance: "Compare fit, validation needs, risk, and first experiments.",
    guidanceZh: "比较匹配度、待验证问题、风险和第一个实验。",
    signal: "The next direction is chosen for testing, not as a final identity.",
    signalZh: "选择下一个要测试的方向，而不是一次性定义未来。"
  },
  {
    title: "尝试行动",
    english: "Act",
    thought: "我知道要行动，但不知道第一步该做什么。",
    guidance: "Generate a low-pressure 7-day and 30-day validation plan.",
    guidanceZh: "生成低压力的 7 天 / 30 天验证计划。",
    signal: "Direction becomes concrete tasks: learn, talk, build, reflect.",
    signalZh: "方向被拆成学习、沟通、制作、反思的具体任务。"
  },
  {
    title: "反思调整",
    english: "Reflect",
    thought: "我做完了，但不知道这说明我适不适合这个方向。",
    guidance: "Use checkpoints to decide whether to continue, pause, or pivot.",
    guidanceZh: "用复盘节点判断继续、暂停，还是调整方向。",
    signal: "Experience becomes confidence, questions, and a better next test.",
    signalZh: "经历沉淀成信心、问题和下一次更好的测试。"
  }
];

export const onboardingFields = [
  {
    label: "What are you currently uncertain about?",
    labelZh: "你现在最不确定的是什么？",
    helper: "Choose the uncertainty that feels closest right now.",
    helperZh: "选择现在最接近你状态的不确定感。",
    options: ["Major choice", "Career direction", "Internship path", "Research vs. industry", "Portfolio ideas"],
    optionsZh: ["专业选择", "职业方向", "实习路径", "科研还是就业", "作品集想法"]
  },
  {
    label: "What direction are you curious about?",
    labelZh: "你对哪个方向有好奇？",
    helper: "It can be broad, incomplete, or just a feeling.",
    helperZh: "可以很宽泛、不完整，也可以只是一个感觉。",
    options: ["UX Research", "Product Strategy", "Learning Design", "Climate Tech", "Startup ideas"],
    optionsZh: ["UX 研究", "产品策略", "学习体验设计", "气候科技", "创业想法"]
  },
  {
    label: "What have you already tried?",
    labelZh: "你已经尝试过什么？",
    helper: "Small signals count. Reading, conversations, classes, and projects all matter.",
    helperZh: "小信号也算数。阅读、聊天、课程、项目都值得记录。",
    options: ["Read articles", "Talked to seniors", "Took a class", "Joined a club", "Built a small project"],
    optionsZh: ["读过文章", "问过学长学姐", "上过相关课", "加入过社团", "做过小项目"]
  },
  {
    label: "What support do you need right now?",
    labelZh: "你现在最需要哪种支持？",
    helper: "Inspark will adapt the next step around this need.",
    helperZh: "Inspark 会围绕这个需求调整下一步引导。",
    options: ["Ask better questions", "Filter information", "Compare options", "Make an action plan", "Reflect after trying"],
    optionsZh: ["提出更好的问题", "筛选信息", "比较方向", "制定行动计划", "尝试后复盘"]
  }
];

export const reflectionPrompts = [
  { en: "What sparked your interest in this direction?", zh: "是什么激发了你对这个方向的兴趣？" },
  { en: "What information have you already looked at?", zh: "你已经看过哪些相关信息？" },
  { en: "What options are you comparing right now?", zh: "你现在正在比较哪些选择？" },
  { en: "What is stopping you from taking action?", zh: "是什么阻碍你迈出下一步？" },
  { en: "What would be a small next step you feel comfortable trying?", zh: "有没有一个你愿意尝试的小行动？" }
];

export const suggestedAnswers = [
  { en: "I noticed I enjoy understanding why people make decisions.", zh: "我发现自己喜欢理解人为什么做决定。" },
  { en: "I have read posts and course pages, but they all sound useful.", zh: "我看过帖子和课程页，但感觉每个都有用。" },
  { en: "I am comparing UX research, product, and education design.", zh: "我在比较 UX 研究、产品和教育设计。" },
  { en: "I do not know what a small first project should look like.", zh: "我不知道第一个小项目应该长什么样。" }
];

export const directions = [
  {
    name: "UX Research",
    nameZh: "UX 研究",
    confidence: 82,
    fit: "This direction may be worth testing because you keep returning to people, behavior, and how decisions are made.",
    fitZh: "这个方向值得测试，因为你反复关注人、行为，以及人们如何做决定。",
    validate: "Do you enjoy ambiguity, interviews, synthesis, and turning messy input into clear product insight?",
    validateZh: "你是否喜欢处理模糊问题、访谈、综合信息，并把混乱输入转化为清晰洞察？",
    experiment: "Run three 20-minute student interviews about course planning, then synthesize patterns into one insight memo.",
    experimentZh: "围绕选课规划做 3 次 20 分钟学生访谈，再整理成一页洞察 memo。",
    risk: "Research can feel slow if you mainly want to ship visible products quickly.",
    riskZh: "如果你更想快速做出可见产品，研究过程可能会显得偏慢。",
    accent: "purple"
  },
  {
    name: "Product Strategy",
    nameZh: "产品策略",
    confidence: 76,
    fit: "Your interest in systems, tradeoffs, and communication suggests a possible fit with prioritizing product direction.",
    fitZh: "你对系统、取舍和表达的兴趣，说明产品方向优先级判断可能适合你。",
    validate: "Can you compare user needs, market signals, constraints, and timing without needing a perfect answer?",
    validateZh: "你能否在没有完美答案的情况下，比较用户需求、市场信号、限制和时机？",
    experiment: "Pick one student problem and write a one-page product brief with audience, problem, bet, and success signal.",
    experimentZh: "选择一个学生问题，写一页产品 brief：用户、问题、假设和成功信号。",
    risk: "It may feel abstract without enough hands-on product or user evidence.",
    riskZh: "如果缺少实际产品或用户证据，这个方向可能会显得抽象。",
    accent: "blue"
  },
  {
    name: "Learning Experience Design",
    nameZh: "学习体验设计",
    confidence: 71,
    fit: "You seem drawn to making complex ideas easier to understand, especially in student-centered contexts.",
    fitZh: "你似乎被“让复杂内容更容易理解”吸引，尤其是在学生学习场景中。",
    validate: "Do you enjoy designing learning sequences, feedback moments, and clear explanations over time?",
    validateZh: "你是否喜欢设计学习顺序、反馈节点，以及持续清晰的解释？",
    experiment: "Create a 15-minute mini lesson that helps first-year students compare three academic paths.",
    experimentZh: "设计一个 15 分钟 mini lesson，帮助大一学生比较三个学术方向。",
    risk: "This path can be overlooked because it sounds less trendy than product or AI roles.",
    riskZh: "这个方向可能不如产品或 AI 听起来热门，因此容易被低估。",
    accent: "green"
  }
];

export const plan7Day = [
  { day: "Day 1", dayZh: "第 1 天", task: "Write down why this direction interests you.", taskZh: "写下这个方向为什么吸引你。", type: "Reflect", typeZh: "反思" },
  { day: "Day 2", dayZh: "第 2 天", task: "Read one beginner resource and capture three useful signals.", taskZh: "阅读一个入门资源，记录三个有用信号。", type: "Learn", typeZh: "学习" },
  { day: "Day 3", dayZh: "第 3 天", task: "Interview one senior student or professional.", taskZh: "访谈一位学长学姐或从业者。", type: "Talk", typeZh: "沟通" },
  { day: "Day 4", dayZh: "第 4 天", task: "Try a small project with a visible output.", taskZh: "做一个有可见产出的小项目。", type: "Build", typeZh: "制作" },
  { day: "Day 5", dayZh: "第 5 天", task: "Reflect on energy, fit, and moments of resistance.", taskZh: "复盘能量感、匹配度和卡住的时刻。", type: "Reflect", typeZh: "反思" },
  { day: "Day 6", dayZh: "第 6 天", task: "Compare this direction with one alternative.", taskZh: "把这个方向和另一个备选方向比较。", type: "Compare", typeZh: "比较" },
  { day: "Day 7", dayZh: "第 7 天", task: "Decide whether to continue, pause, or pivot.", taskZh: "决定继续、暂停，还是调整方向。", type: "Checkpoint", typeZh: "检查点" }
];

export const plan30Day = [
  { en: "Week 1: Learn the basics and define one validation question.", zh: "第 1 周：学习基础，并定义一个验证问题。" },
  { en: "Week 2: Talk to three people who have real experience in the direction.", zh: "第 2 周：和三位有真实经验的人交流。" },
  { en: "Week 3: Build a small artifact that tests the work, not just the idea.", zh: "第 3 周：做一个小产出，测试真实工作而不只是想法。" },
  { en: "Week 4: Review evidence and choose continue, pause, pivot, or compare again.", zh: "第 4 周：复盘证据，选择继续、暂停、调整或再次比较。" }
];

export const taskTypes = [
  { label: "Learn task", labelZh: "学习任务", type: "learn", text: "Read one grounded resource and extract useful signals.", textZh: "阅读一个扎实资源，并提取有用信号。" },
  { label: "Talk task", labelZh: "沟通任务", type: "talk", text: "Ask one senior student how the work feels day to day.", textZh: "问一位学长学姐这个方向每天真实做什么。" },
  { label: "Build task", labelZh: "制作任务", type: "build", text: "Create a small artifact that makes the direction tangible.", textZh: "做一个小产出，让方向变得具体。" },
  { label: "Reflect task", labelZh: "反思任务", type: "reflect", text: "Notice energy, friction, and what felt meaningful.", textZh: "记录能量、阻力，以及真正有意义的部分。" }
];

export const checkpoints = [
  { en: "Did this task give you energy or drain you?", zh: "这个任务让你更有能量，还是更消耗？" },
  { en: "What did you learn about yourself?", zh: "你从中了解了自己什么？" },
  { en: "Does this direction feel more clear, less clear, or unchanged?", zh: "这个方向现在更清晰、更模糊，还是没有变化？" },
  { en: "What should you test next?", zh: "下一步应该测试什么？" }
];

export const progressSignals = [
  { label: "Clarity", labelZh: "清晰度", value: 68, type: "target" },
  { label: "Evidence", labelZh: "证据", value: 54, type: "search" },
  { label: "Energy", labelZh: "能量感", value: 74, type: "sparkles" },
  { label: "Next step readiness", labelZh: "下一步准备度", value: 81, type: "lightbulb" }
];
