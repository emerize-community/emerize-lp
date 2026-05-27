import Link from "next/link";
import { COMPANY } from "../../lib/data/company";

export default function OurActivities() {
  return (
    <section className="relative bg-white py-20 sm:py-28" aria-labelledby="our-activities-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">事業内容</p>
        <h2
          id="our-activities-heading"
          className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
        >
          私たちの活動
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {COMPANY.name}は、海外の大学生を対象に、教育・コミュニティ、イベント、マーケティングの分野で事業を展開しています。
        </p>
        <ul className="mt-10 grid items-stretch gap-4 sm:grid-cols-2">
          {COMPANY.businessItems.map((item) => (
            <li
              key={item}
              className="flex min-h-full items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-slate-800 sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            お問い合わせ
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
          >
            プロジェクトを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
