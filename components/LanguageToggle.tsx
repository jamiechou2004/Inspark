"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "zh";

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("inspark-language") as Language | null;
    const initial = saved === "zh" || saved === "en" ? saved : "en";
    setLanguage(initial);
    document.documentElement.dataset.lang = initial;
    document.documentElement.lang = initial === "zh" ? "zh-CN" : "en";
  }, []);

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("inspark-language", nextLanguage);
    document.documentElement.dataset.lang = nextLanguage;
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  };

  return (
    <div className="language-toggle" aria-label="Language selector">
      <Languages size={15} />
      <button
        className={language === "en" ? "active" : ""}
        type="button"
        onClick={() => selectLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        className={language === "zh" ? "active" : ""}
        type="button"
        onClick={() => selectLanguage("zh")}
        aria-pressed={language === "zh"}
      >
        中文
      </button>
    </div>
  );
}
