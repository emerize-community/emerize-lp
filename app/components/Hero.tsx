export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
            APAC × キャリアコミュニティ
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            APACから、
          </span>
          <br />
          <span className="text-gray-900">キャリアの選択肢を広げる。</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          海外で学ぶ日本人学生のための、
          <br />
          <span className="font-semibold text-gray-700">"ワクワク"</span>から始まるキャリアコミュニティ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            協賛・連携を相談する
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="group w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            イベントに参加する
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

