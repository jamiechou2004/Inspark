"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Flame, Lightbulb, Map, Sparkles, UserRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Compass },
  { href: "/onboarding", label: "Onboarding", icon: Sparkles },
  { href: "/reflection", label: "Reflect", icon: Lightbulb },
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/plan", label: "Plan", icon: Map }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Flame size={21} strokeWidth={2.5} />
          </span>
          <span>
            <p className="brand-title">Inspark</p>
            <p className="brand-subtitle">Self-discovery for students</p>
          </span>
        </Link>

        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
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
