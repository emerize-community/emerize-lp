const steps = [
  { step: "1", title: "お問い合わせ", body: "まずはお気軽にお問い合わせフォームまたはメールよりご連絡ください。" },
  { step: "2", title: "ヒアリング", body: "対象学生像や目的、実施時期・予算感などをオンラインで確認させていただきます。" },
  { step: "3", title: "イベント設計", body: "ヒアリング内容をもとに、企画案・スケジュール・体制をご提案します。" },
  { step: "4", title: "実施", body: "当日のファシリテーションやコミュニケーション設計も含めて伴走いたします。" },
  { step: "5", title: "フィードバック", body: "参加学生の声やアンケート結果をレポートし、次回以降の改善につなげます。" },
];

export default function Flow() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Flow</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            企業さまとのご一緒の流れ
          </h2>
        </div>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="flex gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-soft-lg"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white">
                {s.step}
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
