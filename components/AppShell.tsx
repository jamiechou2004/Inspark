"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, GitCompare, Lightbulb, Map, TrendingUp, UserRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Compass },
  { href: "/reflection", label: "Reflection", icon: Lightbulb },
  { href: "/focus", label: "Direction Focus", icon: GitCompare },
  { href: "/plan", label: "Validation Plan", icon: Map },
  { href: "/progress", label: "Progress", icon: TrendingUp },
  { href: "/profile", label: "Profile", icon: UserRound }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <img className="brand-logo" src="/inspark-logo.svg" alt="InSpark" />
          <span className="brand-subtitle">Self-discovery for students</span>
        </Link>

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
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="shell-main">{children}</main>
    </div>
  );
}
