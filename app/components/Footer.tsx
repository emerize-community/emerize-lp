import Link from "next/link";
import { COMPANY } from "../../lib/data/company";
import { footerSiteLinks } from "../../lib/navigation";

export default function Footer() {
  const legalLinks = [
    { label: "定款（PDF）", href: COMPANY.teikanPdfPath, external: true },
    { label: "プライバシーポリシー", href: "/privacy" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <section className="min-w-0 lg:col-span-1">
            <h2 className="text-lg font-semibold text-white">{COMPANY.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{COMPANY.address}</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-slate-400">法人番号</dt>
                <dd className="mt-0.5 text-slate-200">{COMPANY.corporateNumber}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">メール</dt>
                <dd className="mt-0.5 break-all">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-slate-200 transition hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="min-w-0">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400">サイトマップ</h3>
            <ul className="mt-4 flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-x-4">
              {footerSiteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="min-w-0">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400">法的情報</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
