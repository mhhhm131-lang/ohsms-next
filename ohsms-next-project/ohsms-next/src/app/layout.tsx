import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import { MainShell } from "@/components/layout/MainShell";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نظام إدارة السلامة والصحة المهنية – OHSMS M.S",
  description: "واجهة مؤسسية مبنية باستخدام Next.js, React, TypeScript, Tailwind CSS، مع طبقة Mock API ومعايير API موحّدة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <MainShell>{children}</MainShell>
      </body>
    </html>
  );
}