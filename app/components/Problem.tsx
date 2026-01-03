export default function Problem() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            課題
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            日本人海外大学生向け
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <ul className="space-y-8">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed pt-2 font-medium">
                  アジア留学・海外就職に関する情報がまだ少ない
                </p>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed pt-2 font-medium">
                  「就職＝堅い」「イベント＝説明会」という固定観念
                </p>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed pt-2 font-medium">
                  企業との接点が単発で終わり、受け身になりやすい
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

