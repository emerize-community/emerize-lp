export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
            お問い合わせ
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          まずは一度、お話ししませんか。
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed font-light">
          学生・企業どちらの方もお気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="group px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            協賛・連携を相談する
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#"
            className="group px-10 py-5 bg-transparent text-white border-2 border-white/80 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform backdrop-blur-sm"
          >
            イベントに参加する
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

