import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export default function StudentPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      {/* 学生向け背景：ティール系グラデーション＋オーブ＋シャボン玉 */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgb(204 251 241 / 0.5) 0%, 
              rgb(153 246 228) 25%, 
              rgb(204 251 241) 55%, 
              rgb(240 253 250) 100%
            )
          `,
        }}
      />
      <div className="fixed top-0 right-0 z-0 h-[80%] w-[60%] max-w-[700px] rounded-full bg-teal-300/35 blur-[100px]" />
      <div className="fixed bottom-0 left-0 z-0 h-[60%] w-[50%] max-w-[600px] rounded-full bg-teal-200/30 blur-[100px]" />
      {/* すこしのシャボン玉 */}
      <div
        className="fixed z-0 rounded-full border border-white/30"
        style={{
          top: "18%",
          left: "12%",
          width: "clamp(60px, 8vw, 100px)",
          height: "clamp(60px, 8vw, 100px)",
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.05) 40%, transparent 70%)",
          boxShadow: "inset 0 0 20px rgba(255,255,255,0.15)",
        }}
      />
      <div
        className="fixed z-0 rounded-full border border-white/25"
        style={{
          top: "45%",
          right: "18%",
          width: "clamp(40px, 5vw, 70px)",
          height: "clamp(40px, 5vw, 70px)",
          background: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.4), rgba(255,255,255,0.03) 50%, transparent 70%)",
          boxShadow: "inset 0 0 15px rgba(255,255,255,0.1)",
        }}
      />
      <div
        className="fixed z-0 rounded-full border border-white/20"
        style={{
          bottom: "25%",
          left: "25%",
          width: "clamp(50px, 6vw, 85px)",
          height: "clamp(50px, 6vw, 85px)",
          background: "radial-gradient(circle at 25% 35%, rgba(255,255,255,0.35), rgba(255,255,255,0.02) 45%, transparent 65%)",
          boxShadow: "inset 0 0 18px rgba(255,255,255,0.08)",
        }}
      />
      <div
        className="fixed z-0 rounded-full border border-white/20"
        style={{
          top: "65%",
          right: "8%",
          width: "clamp(35px, 4vw, 55px)",
          height: "clamp(35px, 4vw, 55px)",
          background: "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.3), transparent 55%)",
        }}
      />
      <div
        className="fixed z-0 rounded-full border border-white/25"
        style={{
          top: "30%",
          right: "35%",
          width: "clamp(45px, 5.5vw, 75px)",
          height: "clamp(45px, 5.5vw, 75px)",
          background: "radial-gradient(circle at 28% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0.02) 48%, transparent 68%)",
          boxShadow: "inset 0 0 12px rgba(255,255,255,0.06)",
        }}
      />
      <div className="relative z-10">
        <Header />
      <main className="pt-20">
        <PageHero imageSrc={PAGE_IMAGES.studentHero} imageAlt="学生向け" imageAspect="wide">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">For Students</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            学生向けのご案内
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            「マレーシアで学んでいる今」を活かしながら、
            日本・マレーシアでのキャリアの選択肢を広げたい学生のためのコミュニティです。
          </p>
        </PageHero>

        <section className="py-16 sm:py-24" aria-labelledby="what-we-offer-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              WHAT WE OFFER
            </p>
            <h2
              id="what-we-offer-heading"
              className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              EmeRizeで得られる機会
            </h2>
            <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
              {[
                {
                  title: "キャリアイベント",
                  body: "日本企業の担当者や現地で活躍する社会人を招き、トークセッションや少人数イベントを開催しています。リアルなキャリアを知る機会を提供します。",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "スキル・キャリア開発",
                  body: "LinkedIn活用講座や実践型プロジェクトを通じて、グローバル環境で必要なスキルを身につける機会を提供します。",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
                {
                  title: "キャリアコミュニティ",
                  body: "大学や国籍を越えて、マレーシアで学ぶ学生同士がつながるコミュニティを形成しています。",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "ネットワーキング",
                  body: "先輩社会人や企業担当者と直接交流できる機会を通じて、キャリアの可能性を広げます。",
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur sm:p-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-emerald-600 p-10 shadow-soft-lg sm:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                公式LINE・Instagram
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-emerald-100">
                まずは軽く話を聞いてみたい、という方も大歓迎。LINEやInstagramで気軽にフォロー・ご連絡ください。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://line.me/R/ti/p/@emerize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-emerald-600 shadow-soft transition hover:bg-emerald-50"
                >
                  公式LINEで友だち追加
                  <span>→</span>
                </a>
                <a
                  href="https://www.instagram.com/emerize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-200 px-6 py-4 text-base font-semibold text-white transition hover:bg-emerald-500"
                >
                  公式Instagram
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}
