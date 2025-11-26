import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>🛠️ إعدادات وإدارة النظام</CardTitle>
            <CardDescription>
              تهيئة إعدادات النظام، الصلاحيات، وربط الأنظمة الأخرى.
            </CardDescription>
          </div>
          <Badge variant="muted">واجهة مبنية على Next.js / React / TS / Tailwind</Badge>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            هذه الصفحة تم تحويلها من نسخة HTML ثابتة إلى صفحة React داخل مشروع Next.js
            مع احترام معمارية المكوّنات وطبقة Mock API ومعايير API موحّدة.
          </p>
          <p className="text-xs text-slate-500">
            يمكن لاحقاً ربط هذه الصفحة بمصادر بيانات حقيقية (قاعدة بيانات، تكامل مع أنظمة أخرى)
            دون الحاجة لإعادة بناء الواجهة من الصفر.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}