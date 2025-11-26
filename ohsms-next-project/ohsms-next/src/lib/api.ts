import type { Report, Risk } from "./types";

export async function fetchReports(): Promise<Report[]> {
  const res = await fetch("/api/reports");
  if (!res.ok) throw new Error("فشل تحميل البلاغات");
  return res.json();
}

export async function fetchRisks(): Promise<Risk[]> {
  const res = await fetch("/api/risks");
  if (!res.ok) throw new Error("فشل تحميل المخاطر");
  return res.json();
}