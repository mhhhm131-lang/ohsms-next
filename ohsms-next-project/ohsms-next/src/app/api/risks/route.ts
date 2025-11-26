import { NextResponse } from "next/server";
import type { Risk } from "@/lib/types";

export async function GET() {
  const data: Risk[] = [
    {
      id: "K-001",
      title: "تخزين أسطوانات الغاز بدون تثبيت",
      location: "المعمل الرئيسي",
      level: "high",
      status: "open",
    },
    {
      id: "K-002",
      title: "أسلاك كهربائية مكشوفة",
      location: "مبنى الإدارة – الدور الثاني",
      level: "critical",
      status: "in_progress",
    },
    {
      id: "K-003",
      title: "عدم وضوح مسار مخارج الطوارئ",
      location: "المبنى الجنوبي",
      level: "medium",
      status: "closed",
    },
  ];

  return NextResponse.json(data);
}