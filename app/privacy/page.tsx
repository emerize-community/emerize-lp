import Header from "../components/Header";
import Footer from "../components/Footer";
import { COMPANY } from "../../lib/data/company";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-20">
        <PageHero imageSrc={PAGE_IMAGES.privacyHero} imageAlt="プライバシーポリシー" imageAspect="wide">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Privacy Policy</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            プライバシーポリシー
          </h1>
        </PageHero>

        <section className="bg-emerald-50/50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
              <p className="text-base leading-relaxed text-slate-700">
                EmeRize株式会社（以下「当社」といいます）は、当社が提供するサービスにおいて取得する個人情報の重要性を認識し、以下の方針に基づき適切に取り扱います。
              </p>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">1. 個人情報の取得</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                当社は、以下の方法により個人情報を取得する場合があります。
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-base text-slate-700">
                <li>お問い合わせフォーム</li>
                <li>イベント申し込みフォーム</li>
                <li>アンケート調査</li>
                <li>サービス登録</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                取得する情報には以下が含まれます。
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-base text-slate-700">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>所属大学</li>
                <li>学年</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">2. 個人情報の利用目的</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                取得した個人情報は、以下の目的で利用します。
              </p>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-base text-slate-700">
                <li>サービス提供および運営のため</li>
                <li>イベントやサービスに関する案内のため</li>
                <li>アンケート調査およびマーケティング分析のため</li>
                <li>お問い合わせ対応のため</li>
                <li>新しいサービスの開発および改善のため</li>
              </ol>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">3. 個人情報の第三者提供</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                当社は、以下の場合を除き、個人情報を第三者に提供することはありません。
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-base text-slate-700">
                <li>本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>サービス提供に必要な範囲で業務委託する場合</li>
              </ul>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">4. 個人情報の管理</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                当社は、個人情報の漏洩、紛失、改ざんを防止するため、適切な安全管理措置を講じます。
              </p>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">5. 個人情報の開示・訂正・削除</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                本人からの個人情報の開示、訂正、削除の依頼があった場合には、合理的な範囲で速やかに対応します。
              </p>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">6. プライバシーポリシーの変更</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                本ポリシーは必要に応じて変更される場合があります。変更後の内容は当社ウェブサイトに掲載した時点で効力を生じます。
              </p>

              <hr className="my-10 border-slate-200" />

              <h2 className="text-lg font-semibold text-slate-900">7. お問い合わせ</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <p className="mt-4 text-base font-medium text-slate-900">EmeRize株式会社</p>
              <p className="mt-1 text-base text-slate-700">
                Email：
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
