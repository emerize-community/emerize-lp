export default function Programs() {
  const programs = [
    "Career Talk / 座談会",
    "企業内ワークショップ体験",
    "LinkedIn活用講座＋α",
    "英語面接対策セッション",
    "Office Tour / Career Fair",
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            プログラム例
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl border border-gray-100">
            <ul className="space-y-6">
              {programs.map((program, index) => (
                <li key={index} className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-xl leading-relaxed font-semibold group-hover:text-gray-900 transition-colors">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

