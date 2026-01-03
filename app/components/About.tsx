export default function About() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            EmeRizeとは
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-10 lg:p-12 shadow-2xl text-center border border-indigo-100 hover:shadow-3xl transition-all duration-300">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              名前の由来
            </div>
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              EmeRize = Emerge + Rise
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              成長しながら上がっていく、という意味を持つ。
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Mission */}
          <div className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              人生が動き出す、新たなキャリア文化の循環をつくる。
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              ここからはじまる、"キッカケ"を、すべての学生へ。
            </p>
          </div>

          {/* Value */}
          <div className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2 transform">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Value</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              人と文化をつなぎ、
              <br />
              国境を越えて"自分らしいキャリア"を選べる世界をつくる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

