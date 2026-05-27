const values = [
  {
    title: "学生キャリアコミュニティへのアクセス",
    body: "マレーシア在住の大学生コミュニティと、計画的なコミュニティ運営を通じてつながることができます。",
  },
  {
    title: "ブランド・キャンパスマーケティング",
    body: "学生向けに最適化した、ブランド認知やキャンパス向けマーケティング活動をサポートします。",
  },
  {
    title: "オンライン・オフラインイベント",
    body: "キャリア関連のイベント、トークセッション、コミュニティプログラムを、目的に合わせて企画・運営します。",
  },
  {
    title: "市場調査・アンケート",
    body: "アンケートやインタビューを通じ、マレーシアの学生の視点や市場動向を把握するお手伝いをします。",
  },
];

export default function CompanyPartnership() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow">企業向け</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            企業の皆さまへのご提供内容
          </h2>
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
