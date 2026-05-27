"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeroProps = {
  /** ヒーロー下に表示する画像（例: /images/home/hero.jpg）。未指定なら表示しない */
  imageSrc?: string | null;
  imageAlt?: string;
};

export default function Hero({ imageSrc, imageAlt = "" }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(imageSrc) && !imgError;

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-36 sm:px-6 sm:pb-36 sm:pt-44 lg:px-8 lg:pb-44 lg:pt-52">
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm">
            マレーシア × 日本企業 × 学生
          </span>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">マレーシアの学生と</span>
            <span className="block">日本企業をつなぐ</span>
            <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              キャリアプラットフォーム
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            マレーシアを拠点に、マレーシアで学ぶ学生と日本企業の間に
            「出会い」と「学び」の機会を生み出し、
            新しいキャリアの選択肢をともにひろげます。
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/company"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/30 sm:w-auto"
            >
              企業の方はこちら →
            </Link>
            <Link
              href="/student"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:bg-slate-50 hover:text-emerald-700 sm:w-auto"
            >
              学生の方はこちら →
            </Link>
          </div>

          {imageSrc != null &&
            (showImage ? (
              <div className="relative mx-auto mt-12 aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 672px"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="relative mx-auto mt-12 flex aspect-[4/3] w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
                <span className="text-sm font-medium text-slate-400">
                  public/images/home/hero.jpg を配置すると表示されます
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
