const values = [
  {
    title: "マレーシアの学生コミュニティへのアクセス",
    body: "マレーシアの学生コミュニティと連携し、ターゲットに合わせたリーチが可能です。",
  },
  {
    title: "採用ブランディング",
    body: "採用だけでなく、「マレーシアで学ぶ学生から見た御社」のイメージ形成を支援します。",
  },
  {
    title: "学生イベント開催",
    body: "目的・時期・対象に応じて、オンライン/オフラインのイベント企画から当日運営まで一貫してサポートします。",
  },
  {
    title: "市場調査",
    body: "学生へのアンケートやインタビューを通じ、マレーシア在住の日本人・ローカル学生の志向性を可視化します。",
  },
];

export default function CompanyPartnership() {
  return (
    <section className="bg-emerald-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">For Company</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            企業に提供できる価値
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft transition hover:shadow-soft-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
