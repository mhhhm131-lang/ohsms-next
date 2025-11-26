import { NextResponse } from "next/server";
import type { Report } from "@/lib/types";

export async function GET() {
  const data: Report[] = [
    {
      id: "R-2025-001",
      title: "انسكاب مادة كيميائية في المختبر",
      reporter: "أحمد علي",
      status: "under_investigation",
      createdAt: "2025-11-20T09:30:00Z",
    },
    {
      id: "R-2025-002",
      title: "تعثر موظف في الدرج بدون إصابة",
      reporter: "سارة محمد",
      status: "closed",
      createdAt: "2025-11-18T10:15:00Z",
    },
    {
      id: "R-2025-003",
      title: "ملاحظة حول انسداد مخارج الطوارئ",
      reporter: "محمد حسين",
      status: "new",
      createdAt: "2025-11-22T14:45:00Z",
    },
  ];

  return NextResponse.json(data);
}