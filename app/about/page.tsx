import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY, getShortName } from "../../lib/data/company";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

const companyOverviewRows: { label: string; value: ReactNode }[] = [
  { label: "会社名", value: COMPANY.nameWithReading },
  { label: "設立", value: COMPANY.established },
  { label: "所在地", value: COMPANY.address },
  { label: "代表取締役", value: getShortName(COMPANY.representative) },
  { label: "取締役", value: getShortName(COMPANY.director) },
  { label: "アドバイザー", value: getShortName(COMPANY.advisor) },
  {
    label: "メールアドレス",
    value: (
      <a
        href={`mailto:${COMPANY.email}`}
        className="text-emerald-600 hover:text-emerald-700"
      >
        {COMPANY.email}
      </a>
    ),
  },
  {
    label: "事業内容",
    value: (
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        {COMPANY.businessItems.map((item) => (
          <li key={item}>{item}</li>
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
        定款を見る（PDF）
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
        <PageHero
          imageSrc={PAGE_IMAGES.aboutHero}
          imageAlt="会社概要"
          imageAspect="wide"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">About</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            会社概要
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            株式会社EmeRizeは、マレーシア・日本をつなぐ学生主導のキャリアプラットフォームです。
          </p>
        </PageHero>

        <section className="bg-emerald-50/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-emerald-600">
              会社概要（Company）
            </h2>
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
              <table className="w-full min-w-[320px] border-collapse">
                <tbody>
                  {companyOverviewRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <th className="w-36 flex-shrink-0 px-6 py-5 text-left text-sm font-semibold text-slate-500 sm:w-40">
                        {row.label}
                      </th>
                      <td className="px-6 py-5 text-base text-slate-900">
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
