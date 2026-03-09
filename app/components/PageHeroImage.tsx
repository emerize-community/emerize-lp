"use client";

import Image from "next/image";
import { useState } from "react";

type PageHeroImageProps = {
  /** 画像のパス（例: /images/home/hero.jpg）。未指定ならプレースホルダー */
  src?: string | null;
  alt?: string;
  /** 画像のアスペクト比。デフォルトは 16:9 */
  aspect?: "video" | "square" | "wide";
  /** 角丸の強さ */
  rounded?: "none" | "lg" | "xl" | "2xl";
  /** プレースホルダーに表示する短い説明 */
  placeholderLabel?: string;
};

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export default function PageHeroImage({
  src,
  alt = "",
  aspect = "video",
  rounded = "xl",
  placeholderLabel = "写真を配置できます",
}: PageHeroImageProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  const roundedClass =
    rounded === "2xl"
      ? "rounded-2xl"
      : rounded === "xl"
        ? "rounded-xl"
        : rounded === "lg"
          ? "rounded-lg"
          : "";

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-200 ${aspectMap[aspect]} ${roundedClass}`}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setImgError(true)}
          priority
        />
      ) : (
        <div className="flex h-full items-center justify-center text-slate-400">
          <span className="text-sm font-medium">{placeholderLabel}</span>
        </div>
      )}
    </div>
  );
}
