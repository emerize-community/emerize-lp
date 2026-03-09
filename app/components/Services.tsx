const services = [
  {
    title: "学生向けキャリアイベント",
    body: "業界研究セッションや少人数座談会など、マレーシアの大学生が日本のキャリアを具体的にイメージできる場を企画・運営します。",
  },
  {
    title: "企業との交流イベント",
    body: "オフィス訪問、オンライン交流会、プロジェクト型ワークショップなど、双方向のコミュニケーションが生まれる企画を設計します。",
  },
  {
    title: "キャリアコミュニティ運営",
    body: "SNS・オンラインプラットフォームを活用し、イベント後も継続的につながるコミュニティを運営します。",
  },
  {
    title: "アンケート調査・市場調査",
    body: "マレーシア在住学生のキャリア観や価値観に関する定性・定量調査を行い、採用・ブランディングに活かせるインサイトをレポートします。",
  },
];

export default function Services() {
  return (
    <section className="bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Services</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            EmeRizeが提供する活動
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-soft-lg sm:p-10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-md shadow-emerald-600/20">
                {i + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold text-slate-900 sm:text-xl">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
