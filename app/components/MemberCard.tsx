"use client";

import Image from "next/image";
import { useState } from "react";

type MemberCardProps = {
  name: string;
  title: string;
  role: string;
  affiliation?: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
};

function getInitials(name: string) {
  return name
    .replace(/\s+/g, "")
    .slice(0, 2);
}

export default function MemberCard({
  name,
  title,
  role,
  affiliation,
  bio,
  image,
  linkedinUrl,
}: MemberCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition hover:shadow-soft-lg">
      <div className="relative h-48 w-full bg-slate-100">
        {!imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-slate-400">
            {getInitials(name)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{role}</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-600">{title}</p>
        {affiliation && (
          <p className="mt-0.5 text-sm text-slate-500">{affiliation}</p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{bio}</p>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
