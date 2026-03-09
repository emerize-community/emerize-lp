import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600 px-6 py-10 shadow-lg sm:px-10 sm:py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
            {/* 左：テキスト */}
            <div className="max-w-xl">
              <p
                id="cta-heading"
                className="text-sm font-medium uppercase tracking-widest text-emerald-200"
              >
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                マレーシア留学生の実態について、まずはお気軽に。
              </h2>
              <p className="mt-5 text-base leading-relaxed text-emerald-100">
                マレーシアにどのくらいの留学生がいるのか、
                どのような学生が学んでいるのか。
              </p>
              <p className="mt-4 text-base leading-relaxed text-emerald-100">
                まずは情報交換からでも問題ありません。
                御社の関心や状況を伺いながら、EmeRizeが提供できる可能性をご紹介します。
              </p>
            </div>

            {/* 右：アクション */}
            <div className="flex flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-emerald-600 shadow-soft transition hover:bg-emerald-50"
              >
                お問い合わせページへ
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
