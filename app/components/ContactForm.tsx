"use client";

import { useState } from "react";
import { COMPANY } from "../../lib/data/company";

const inquiryTypes = [
  "一般的なお問い合わせ",
  "企業連携",
  "イベント企画",
  "市場調査",
  "その他",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const organization = data.get("organization") as string;
    const inquiryType = data.get("inquiryType") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`【${inquiryType}】${name} 様よりお問い合わせ`);
    const body = encodeURIComponent(
      `お名前: ${name}\nメール: ${email}\n所属（企業・大学）: ${organization}\nお問い合わせ種別: ${inquiryType}\n\nお問い合わせ内容:\n${message}`
    );

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center sm:p-10">
        <p className="text-lg font-semibold text-slate-900">お問い合わせありがとうございます。</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          まもなくメールアプリが開きます。開かない場合は、
          <a href={`mailto:${COMPANY.email}`} className="font-medium text-emerald-600 hover:text-emerald-700">
            {COMPANY.email}
          </a>
          まで直接ご連絡ください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-slate-700">
          所属（企業・大学）
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:w-auto"
      >
        送信する
      </button>
    </form>
  );
}
