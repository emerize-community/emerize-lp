import Link from "next/link";

type NoticeCardProps = {
  title: string;
  date: string;
  summary: string;
  href?: string;
};

export default function NoticeCard({
  title,
  date,
  summary,
  href,
}: NoticeCardProps) {
  const content = (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs text-slate-500">{date}</p>
      <h3 className="mt-1 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
        {summary}
      </p>
      {href && (
        <span className="mt-3 text-xs font-semibold text-emerald-700">
          詳細を見る →
        </span>
      )}
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return isExternal ? (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
}

