import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoticeCard from "../components/NoticeCard";
import { notices } from "../../lib/data/notices";
import PageHero from "../components/PageHero";
import { PAGE_IMAGES } from "../../lib/page-images";

export const metadata: Metadata = {
  title: "お知らせ - EmeRize",
  description: "EmeRizeからのイベント情報や活動レポート",
};

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <PageHero imageSrc={PAGE_IMAGES.noticeHero} imageAlt="お知らせ" imageAspect="wide">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            お知らせ
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            EmeRizeからのイベント情報や活動レポートなどをお届けします。
          </p>
        </PageHero>

        <section className="mt-12">
          <div className="grid gap-5 md:grid-cols-2">
            {notices.map((n) => (
              <NoticeCard
                key={n.id}
                title={n.title}
                date={n.date}
                summary={n.summary}
                href={n.href}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
