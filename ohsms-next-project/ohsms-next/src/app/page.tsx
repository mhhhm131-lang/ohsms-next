import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>📊 لوحة التحكم – Dashboard</CardTitle>
            <CardDescription>
              مؤشرات السلامة والصحة المهنية على مستوى المنشأة، مع الاعتماد على منهجية
              Next.js / React / TypeScript / Tailwind / UI Components / Mock API / Unified API Standards.
            </CardDescription>
          </div>
          <Badge variant="muted">إصدار تجريبي مبني على Mock API</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
              <p className="text-xs text-slate-200">إجمالي المخاطر</p>
              <p className="mt-2 text-2xl font-semibold">128</p>
              <p className="mt-1 text-[11px] text-slate-300">
                بيانات توضيحية من طبقة الـ Mock API – جاهزة للاستبدال بمصدر حقيقي.
              </p>
            </div>
            <div className="rounded-2xl bg-red-50 px-4 py-3">
              <p className="text-xs text-red-700">المخاطر العالية / الحرجة</p>
              <p className="mt-2 text-2xl font-semibold text-red-800">23</p>
              <p className="mt-1 text-[11px] text-red-700">
                مؤشر يربط لاحقاً بواجهة /api/risks وفق معيار API موحّد.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3">
              <p className="text-xs text-emerald-700">نسبة البلاغات المعالجة</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-800">87%</p>
              <p className="mt-1 text-[11px] text-emerald-700">
                يمكن احتسابها من بيانات /api/reports (حالات منتهية مقابل الكلي).
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-3">
              <p className="text-xs text-amber-700">متوسط زمن الإغلاق</p>
              <p className="mt-2 text-2xl font-semibold text-amber-800">3.2 يوم</p>
              <p className="mt-1 text-[11px] text-amber-700">
                يدعم المعايير المستقبلية لمؤشرات الأداء KPI.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Card className="border-dashed border-slate-300 bg-slate-50">
              <CardHeader>
                <CardTitle>معمارية الواجهة</CardTitle>
                <CardDescription>
                  تلخيص للنتيجة النهائية للمنهجية المعتمدة في هذا المشروع.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pr-4 text-sm">
                  <li>Next.js مع App Router لواجهات مؤسسية قابلة للتوسع.</li>
                  <li>React + TypeScript لضمان واجهة لا تنكسر مع الزمن.</li>
                  <li>Tailwind CSS لتصميم متّسق وسريع مع دعم RTL.</li>
                  <li>UI Components Architecture لإعادة استخدام المكوّنات.</li>
                  <li>Mock API Layer للفصل بين الواجهة ومصدر البيانات.</li>
                  <li>Unified API Standards لتوحيد نماذج الاستجابات والأنواع.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  هذه المنهجية مصمَّمة لتعيش وتستمر لعشر سنوات على الأقل دون إعادة بناء جذرية.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-slate-300 bg-slate-50">
              <CardHeader>
                <CardTitle>النتيجة النهائية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p>اعتمادك على المنهجية التالية:</p>
                <ul className="list-disc space-y-1 pr-4">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>UI Components Architecture</li>
                  <li>Mock API Layer</li>
                  <li>Unified API Standards</li>
                </ul>
                <p className="mt-2">سيُمكّنك من بناء واجهة:</p>
                <ul className="list-disc space-y-1 pr-4">
                  <li>💎 مؤسسية المستوى</li>
                  <li>💎 لا تنكسر</li>
                  <li>💎 قابلة للتوسع والتطوير المستقبلي</li>
                  <li>💎 قابلة للاندماج مع الأنظمة الحالية والمستقبلية</li>
                  <li>💎 مصمَّمة لتعيش وتستمر لعشر سنوات على الأقل دون إعادة بناء جذرية</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}