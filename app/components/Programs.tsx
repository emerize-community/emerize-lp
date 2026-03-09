const whyMalaysia = [
  {
    number: "01",
    title: "成長するASEAN経済圏",
    body: "ASEANは世界でも高い成長率を維持する地域の一つです。マレーシアはその中心に位置し、グローバル企業が拠点を置く東南アジアのビジネスハブとなっています。",
  },
  {
    number: "02",
    title: "国際人材が集まる教育拠点",
    body: "マレーシアには現在、約170,000人以上の国際学生が在籍しており、アジア有数の国際教育ハブとなっています。今後も25万人以上の国際学生受け入れが期待されており、さらなる国際人材の集積が見込まれています。",
  },
  {
    number: "03",
    title: "日本人に人気の留学先",
    body: "マレーシアは日本人学生にとっても人気の留学先であり、日本人の留学先ランキング第3位の国となっています。英語環境とアジアのビジネス環境を同時に経験できる点が、多くの学生に選ばれる理由です。",
  },
];

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-transparent py-28 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            なぜマレーシアなのか？
          </h2>
          <p className="mt-5 text-lg text-slate-600 sm:text-xl">
            東南アジアと世界をつなぐ、教育・人材のハブだから。
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-slate-600">
            マレーシアは、急成長するASEAN経済圏の中心に位置し、世界中から学生が集まる国際教育拠点として注目されています。
          </p>
        </div>

        <div className="mt-24 space-y-20 sm:mt-28 sm:space-y-24 lg:space-y-28">
          {whyMalaysia.map((item) => (
            <div
              key={item.title}
              className="border-t border-slate-200 pt-14 sm:pt-16"
            >
              <span className="text-5xl font-bold tracking-tighter text-emerald-600 sm:text-6xl md:text-7xl">
                {item.number}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
