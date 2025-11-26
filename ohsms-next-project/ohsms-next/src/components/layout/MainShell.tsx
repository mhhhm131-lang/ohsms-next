"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "لوحة التحكم" },
  { href: "/reports", label: "البلاغات والتقارير" },
  { href: "/risks", label: "المخاطر" },
  { href: "/documents", label: "الوثائق" },
  { href: "/clients", label: "العملاء / الفروع" },
  { href: "/awareness", label: "التوعية" },
  { href: "/admin", label: "إدارة النظام" },
];

export function MainShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              نظام إدارة السلامة والصحة المهنية –{" "}
              <span className="text-primary-600">OHSMS M.S</span>
            </h1>
            <p className="text-sm text-slate-500">
              واجهة مؤسسية مبنية على Next.js, React, TypeScript, Tailwind CSS، وطبقة Mock API.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Next.js • React • TypeScript
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Tailwind CSS • UI Components
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Mock API • Unified API Standards
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-4">
        <aside className="hidden w-64 shrink-0 md:block">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <span>{item.label}</span>
                  {active && <span className="text-[10px]">●</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1">
          <div className="mb-4 flex items-center gap-2 md:hidden">
            <span className="text-xs text-slate-500">
              أنت الآن في: {NAV_ITEMS.find((x) => x.href === pathname)?.label ??
                "لوحة التحكم"}
            </span>
          </div>
          {children}
        </main>
      </div>

      <footer className="border-t bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            واجهة مؤسسية لا تنكسر – قابلة للتوسع – قابلة للاندماج – قابلة للتعايش
            لعشر سنوات قادمة على الأقل.
          </p>
          <p>
            مبني وفق منهجية: Next.js • React • TypeScript • Tailwind CSS • UI
            Components Architecture • Mock API Layer • Unified API Standards.
          </p>
        </div>
      </footer>
    </div>
  );
}