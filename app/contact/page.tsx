import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { COMPANY } from "../../lib/data/company";

const companyDetails = [
  { label: "会社名", value: COMPANY.name },
  { label: "法人番号", value: COMPANY.corporateNumber },
  { label: "所在地", value: COMPANY.address },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${COMPANY.email}`}
        className="break-all font-medium text-emerald-600 hover:text-emerald-700"
      >
        {COMPANY.email}
      </a>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-20">
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">お問い合わせ</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              お問い合わせ
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              企業連携、イベント企画、市場調査、その他のご質問は、下記フォームまたはメールよりお気軽にご連絡ください。
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="min-w-0 lg:col-span-2">
                <h2 className="text-lg font-semibold text-slate-900">会社情報</h2>
                <dl className="mt-8 space-y-6">
                  {companyDetails.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-semibold tracking-wider text-slate-500">
                        {item.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-800">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="min-w-0 lg:col-span-3">
                <h2 className="text-lg font-semibold text-slate-900">お問い合わせフォーム</h2>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
