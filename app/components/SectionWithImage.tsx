"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type SectionWithImageProps = {
  /** 画像のパス。未指定ならプレースホルダー */
  imageSrc?: string | null;
  imageAlt?: string;
  /** 画像を左に配置するか右に配置するか */
  imagePosition?: "left" | "right";
  children: ReactNode;
  /** 画像のアスペクト比 */
  imageAspect?: "video" | "square" | "4/3";
  placeholderLabel?: string;
};

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
};

export default function SectionWithImage({
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  children,
  imageAspect = "4/3",
  placeholderLabel = "写真を配置できます",
}: SectionWithImageProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = imageSrc && !imgError;

  const imageBlock = (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-slate-200 ${aspectMap[imageAspect]}`}
    >
      {showImage ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-slate-400">
          <span className="text-sm font-medium">{placeholderLabel}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          <div className="min-w-0">{children}</div>
        </>
      ) : (
        <>
          <div className="min-w-0 lg:order-2">{imageBlock}</div>
          <div className="min-w-0">{children}</div>
        </>
      )}
    </div>
  );
}
