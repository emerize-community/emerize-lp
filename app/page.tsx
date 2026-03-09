import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import AudienceSplit from "./components/AudienceSplit";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import { PAGE_IMAGES } from "../lib/page-images";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Home 背景：緑のグラデーション（はっきり見えるように） */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(180deg, 
              rgb(167 243 208 / 0.5) 0%, 
              rgb(209 250 229) 25%, 
              rgb(236 253 245) 55%, 
              rgb(241 245 249) 100%
            )
          `,
        }}
      />
      <div className="fixed top-0 right-0 h-[80%] w-[60%] max-w-[700px] -z-10 rounded-full bg-emerald-300/40 blur-[100px]" />
      <div className="fixed bottom-0 left-0 h-[60%] w-[50%] max-w-[600px] -z-10 rounded-full bg-emerald-200/35 blur-[100px]" />
      {/* すこしのシャボン玉 */}
      <div
        className="fixed -z-10 rounded-full border border-white/30"
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
        className="fixed -z-10 rounded-full border border-white/25"
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
        className="fixed -z-10 rounded-full border border-white/20"
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
        className="fixed -z-10 rounded-full border border-white/20"
        style={{
          top: "65%",
          right: "8%",
          width: "clamp(35px, 4vw, 55px)",
          height: "clamp(35px, 4vw, 55px)",
          background: "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.3), transparent 55%)",
        }}
      />
      <div
        className="fixed -z-10 rounded-full border border-white/25"
        style={{
          top: "30%",
          right: "35%",
          width: "clamp(45px, 5.5vw, 75px)",
          height: "clamp(45px, 5.5vw, 75px)",
          background: "radial-gradient(circle at 28% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0.02) 48%, transparent 68%)",
          boxShadow: "inset 0 0 12px rgba(255,255,255,0.06)",
        }}
      />
      <Header />
      <main className="pt-20">
        <Hero imageSrc={PAGE_IMAGES.homeHero} imageAlt="マレーシアの学生と日本企業をつなぐ" />
        <Mission />
        <AudienceSplit />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
