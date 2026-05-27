import Link from "next/link";

export default function AudienceSplit() {
  return (
    <section className="bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="eyebrow">企業・学生の皆さまへ</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            企業と学生、それぞれに届ける価値
          </h2>
        </div>
        <div className="grid items-stretch gap-8 sm:grid-cols-2">
          <Link
            href="/company"
            className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft-lg sm:p-10"
          >
            <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-emerald-50/80 transition group-hover:bg-emerald-50" />
            <p className="relative text-sm font-semibold tracking-wider text-emerald-600">企業向け</p>
            <h3 className="relative mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
              マレーシアの学生との新しい接点をつくる
            </h3>
            <p className="relative mt-5 text-base leading-relaxed text-slate-600">
              学生コミュニティ運営、イベント企画、マーケティングプロジェクト、
              市場調査を通じた中長期の関係構築をご支援します。
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-4">
              企業向けページへ
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/student"
            className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft-lg sm:p-10"
          >
            <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-emerald-50/80 transition group-hover:bg-emerald-50" />
            <p className="relative text-sm font-semibold tracking-wider text-emerald-600">学生向け</p>
            <h3 className="relative mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
              マレーシアで学ぶ学生のキャリア機会を広げる
            </h3>
            <p className="relative mt-5 text-base leading-relaxed text-slate-600">
              学年や専攻にかかわらず、日本・マレーシアでのキャリアに触れられる
              イベントやコミュニティを通じて、「一歩目」を踏み出せる場を提供します。
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-4">
              学生向けページへ
              <span>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
