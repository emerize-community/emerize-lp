import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";
import { members } from "../../lib/data/members";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export default function MembersPage() {
  const founders = members.filter((m) => m.role === "Founder");
  const advisors = members.filter((m) => m.role === "Advisor");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-20">
        <PageHero imageSrc={PAGE_IMAGES.membersHero} imageAlt="メンバー" imageAspect="wide">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Members</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            メンバー紹介
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            EmeRizeの活動を支えるメンバーです。
          </p>
        </PageHero>

        <section className="bg-emerald-50/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {founders.length > 0 && (
              <div className="mb-16">
                <h2 className="text-sm font-medium uppercase tracking-widest text-emerald-600">Founder</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {founders.map((m) => (
                    <MemberCard key={m.id} {...m} />
                  ))}
                </div>
              </div>
            )}

            {advisors.length > 0 && (
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-emerald-600">Advisor</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {advisors.map((m) => (
                    <MemberCard key={m.id} {...m} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
