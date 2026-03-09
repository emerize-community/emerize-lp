import Header from "../components/Header";
import Footer from "../components/Footer";
import CompanyPartnership from "../components/CompanyPartnership";
import Flow from "../components/Flow";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      {/* 企業向け背景：青系グラデーション＋オーブ＋シャボン玉 */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgb(224 242 254 / 0.6) 0%, 
              rgb(186 230 253) 25%, 
              rgb(224 242 254) 55%, 
              rgb(241 245 249) 100%
            )
          `,
        }}
      />
      <div className="fixed top-0 right-0 z-0 h-[80%] w-[60%] max-w-[700px] rounded-full bg-sky-300/35 blur-[100px]" />
      <div className="fixed bottom-0 left-0 z-0 h-[60%] w-[50%] max-w-[600px] rounded-full bg-sky-200/30 blur-[100px]" />
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
        <PageHero imageSrc={PAGE_IMAGES.companyHero} imageAlt="企業向け" imageAspect="wide">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">For Company</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            企業向けのご案内
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            マレーシアで学ぶ学生コミュニティとの接点づくりから、
            採用ブランディング・イベント実施・市場調査まで、
            幅広くご支援します。
          </p>
          <ul className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              学生コミュニティとの接点
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              イベント・採用ブランディング
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              市場調査・リサーチ
            </li>
          </ul>
        </PageHero>
        <CompanyPartnership />
        <Flow />
        <CTA />
      </main>
      <Footer />
      </div>
    </div>
  );
}
