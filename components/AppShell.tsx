"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, GitCompare, Lightbulb, Map, TrendingUp, UserRound } from "lucide-react";
import { BilingualText } from "./BilingualText";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { href: "/", label: "Home", labelZh: "首页", icon: Compass },
  { href: "/reflection", label: "Reflection", labelZh: "反思引导", icon: Lightbulb },
  { href: "/focus", label: "Direction Focus", labelZh: "方向聚焦", icon: GitCompare },
  { href: "/plan", label: "Validation Plan", labelZh: "验证计划", icon: Map },
  { href: "/progress", label: "Progress", labelZh: "进展复盘", icon: TrendingUp },
  { href: "/profile", label: "Profile", labelZh: "个人画像", icon: UserRound }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <img className="brand-logo" src="/inspark-logo.svg" alt="InSpark" />
          <span className="brand-subtitle">
            <BilingualText en="Self-discovery for students" zh="面向学生的自我探索引导" />
          </span>
        </Link>
        <LanguageToggle />

        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href === "/reflection" && pathname === "/onboarding");
            return (
              <Link
                key={item.href}
                className={`nav-link${active ? " active" : ""}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={18} />
                <span>
                  <BilingualText en={item.label} zh={item.labelZh} />
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="shell-main">{children}</main>
    </div>
  );
}
