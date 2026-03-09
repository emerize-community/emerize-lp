import Link from "next/link";
import { COMPANY } from "../../lib/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  const siteLinks = [
    { label: "Home", href: "/" },
    { label: "企業向け", href: "/company" },
    { label: "学生向け", href: "/student" },
    { label: "会社概要", href: "/about" },
    { label: "メンバー", href: "/members" },
    { label: "お知らせ", href: "/notice" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  const contactItems = [
    { label: "メール", href: `mailto:${COMPANY.email}`, text: COMPANY.email },
  ];

  const legalLinks = [
    { label: "定款（PDF）", href: COMPANY.teikanPdfPath, external: true },
    { label: "プライバシーポリシー", href: "/privacy" },
  ];

  const socialLinks = [
    { label: "LINE", href: "https://line.me/R/ti/p/@emerize", external: true },
    { label: "Instagram", href: "https://www.instagram.com/emerize", external: true },
  ];

  return (
    <footer className="border-t border-slate-200 bg-emerald-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* メインエリア：4カラム */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* ブランド */}
          <section className="sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold text-white">EmeRize</h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200">
              マレーシアの学生と日本企業をつなぐキャリアプラットフォーム。
            </p>
          </section>

          {/* サイトナビ */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              サイト
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-emerald-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* お問い合わせ */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              お問い合わせ
            </h3>
            <ul className="mt-4 space-y-2.5">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-sm text-emerald-200 transition hover:text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex gap-3" aria-label="SNS">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg p-2 text-emerald-200 transition hover:bg-emerald-800 hover:text-white"
                    title={item.label}
                  >
                    {item.label === "LINE" ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.039 1.085l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    <span className="sr-only">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* その他 */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              その他
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-sm text-emerald-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 区切り線・コピーライト */}
        <div className="mt-14 border-t border-emerald-800 pt-8 text-center sm:mt-16">
          <p className="text-sm text-emerald-400">
            © {year} EmeRize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
