import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="mb-3 flex items-center justify-between gap-2">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-base font-semibold text-slate-900">{children}</h2>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-xs text-slate-500">{children}</p>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="space-y-3 text-sm">{children}</div>;
}