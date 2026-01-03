export default function Value() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            EmeRizeの解決アプローチ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Career × Entertainment */}
          <div className="group bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career × Entertainment</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              学生がワクワクしながらキャリアを学べる体験型イベント
              <br />
              <span className="text-gray-600 text-base">（ゲーム形式、ピッチ形式、インタラクティブ要素）</span>
            </p>
          </div>

          {/* Practical Learning */}
          <div className="group bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Learning</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              英語面接、LinkedIn、ポートフォリオなど
              <br />
              授業では学べない実践的キャリアスキルの提供
            </p>
          </div>

          {/* Company Connection */}
          <div className="group bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Connection</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              企業訪問（Office Tour）、ワークショップ、
              <br />
              イベント後も続く企業との継続的な接点づくり
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

