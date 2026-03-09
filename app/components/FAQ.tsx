"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "参加費はかかりますか？",
      answer: "基本的に無料で参加いただけます。一部の特別プログラムでは有料の場合がありますが、その際は事前にご案内いたします。",
    },
    {
      question: "どんな学生が参加していますか？",
      answer: "マレーシアを中心に、同地域で学ぶ日本人学生が参加しています。マレーシアで学ぶ日本人学生のためのコミュニティです。",
    },
    {
      question: "オンライン・オフライン両方ありますか？",
      answer: "はい、両方の形式でイベントを開催しています。オンラインイベントは世界中から参加可能で、オフラインイベントは主にマレーシアで開催しています。",
    },
    {
      question: "企業はどのように関われますか？",
      answer: "企業訪問（Office Tour）、ワークショップ、イベントへの協賛・連携など、様々な形で関わっていただけます。お問い合わせフォームからご連絡ください。",
    },
    {
      question: "協賛・連携はどのように進みますか？",
      answer: "お問い合わせいただいた後、30分程度のヒアリングを行い、企業のニーズに合わせた連携プログラムを設計します。単発で終わらない継続的な関係性を重視しています。",
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            よくある質問
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
              >
                <span className="font-bold text-gray-900 text-xl pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-700 leading-relaxed text-lg font-medium animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

