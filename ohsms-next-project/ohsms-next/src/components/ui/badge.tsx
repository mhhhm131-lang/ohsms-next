import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "success" | "danger" | "warning" | "muted";
  className?: string;
}) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium";
  const variants: Record<string, string> = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-emerald-100 text-emerald-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-amber-100 text-amber-800",
    muted: "bg-slate-50 text-slate-500",
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}