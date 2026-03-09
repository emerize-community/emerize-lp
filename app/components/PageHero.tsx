import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  children: ReactNode;
  /** タイトル下に表示する画像（例: /images/about/hero.jpg）。未指定なら表示しない */
  imageSrc?: string | null;
  imageAlt?: string;
  /** 画像のアスペクト比 */
  imageAspect?: "video" | "wide" | "4/3";
};

const aspectMap = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
};

export default function PageHero({
  children,
  imageSrc,
  imageAlt = "",
  imageAspect = "wide",
}: PageHeroProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
        {imageSrc != null && (
          <div className={`relative mt-10 w-full overflow-hidden rounded-xl bg-slate-200 ${aspectMap[imageAspect]}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
