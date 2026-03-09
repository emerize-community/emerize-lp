import Header from "../components/Header";
import Footer from "../components/Footer";
import { COMPANY } from "../../lib/data/company";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      {/* コンタクト背景：落ち着いた緑のグラデーション＋オーブ＋シャボン玉 */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgb(236 253 245) 0%, 
              rgb(209 250 229) 30%, 
              rgb(236 253 245) 65%, 
              rgb(241 245 249) 100%
            )
          `,
        }}
      />
      <div className="fixed top-0 right-0 z-0 h-[80%] w-[60%] max-w-[700px] rounded-full bg-emerald-200/30 blur-[100px]" />
      <div className="fixed bottom-0 left-0 z-0 h-[60%] w-[50%] max-w-[600px] rounded-full bg-emerald-100/25 blur-[100px]" />
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
        <PageHero imageSrc={PAGE_IMAGES.contactHero} imageAlt="お問い合わせ" imageAspect="wide">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Contact</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            企業向けのご相談はフォームまたはメールにて受け付けております。
          </p>
        </PageHero>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
                <h2 className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                  企業向けお問い合わせ
                </h2>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  Googleフォーム
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  イベントのご相談、リサーチのご依頼、共創の可能性など、お気軽にご記入ください。
                </p>
                <a
                  href={COMPANY.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-700"
                >
                  企業向けフォームを開く
                  <span>→</span>
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
                <h2 className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                  メールでのお問い合わせ
                </h2>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  メールアドレス
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  フォーム以外でも、メールにてお問い合わせいただけます。
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
                >
                  {COMPANY.email}
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
