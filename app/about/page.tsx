import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY, getShortName } from "../../lib/data/company";

const companyOverviewRows: { label: string; value: ReactNode }[] = [
  { label: "会社名", value: COMPANY.name },
  { label: "法人番号", value: COMPANY.corporateNumber },
  { label: "設立", value: COMPANY.established },
  { label: "所在地", value: COMPANY.address },
  { label: "代表取締役", value: getShortName(COMPANY.representative) },
  { label: "取締役", value: getShortName(COMPANY.director) },
  { label: "アドバイザー", value: getShortName(COMPANY.advisor) },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${COMPANY.email}`}
        className="break-all text-emerald-600 hover:text-emerald-700"
      >
        {COMPANY.email}
      </a>
    ),
  },
  {
    label: "事業内容",
    value: (
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        {COMPANY.businessItems.map((item) => (
          <li key={item} className="text-slate-900">
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "定款",
    value: (
      <Link
        href={COMPANY.teikanPdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700"
      >
        定款（PDF）
        <span aria-hidden>→</span>
      </Link>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-20">
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">会社概要</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              株式会社EmeRizeについて
            </h1>
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
              {COMPANY.aboutJa.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-wider text-emerald-600">
              会社情報
            </h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-0 border-collapse">
                <tbody>
                  {companyOverviewRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <th className="w-[7.5rem] min-w-0 shrink-0 px-4 py-5 text-left align-top text-sm font-semibold text-slate-500 sm:w-36 sm:px-6">
                        {row.label}
                      </th>
                      <td className="min-w-0 px-4 py-5 text-sm leading-relaxed text-slate-900 sm:px-6 sm:text-base">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
