export default function Flow() {
  const studentSteps = [
    { step: 1, title: "フォーム登録", description: "参加フォームから登録" },
    { step: 2, title: "コミュニティ参加", description: "オンラインコミュニティへの参加" },
    { step: 3, title: "イベント参加", description: "各種イベントへの参加" },
    { step: 4, title: "次の挑戦へ", description: "得た経験とネットワークを活かして次のステップへ" },
  ];

  const companySteps = [
    { step: 1, title: "問い合わせ", description: "お問い合わせフォームからご連絡" },
    { step: 2, title: "ヒアリング（30分）", description: "EmeRizeチームとのオンライン/オフラインでのヒアリング" },
    { step: 3, title: "連携設計", description: "企業のニーズに合わせた連携プログラムを設計" },
    { step: 4, title: "実施", description: "設計したプログラムを実施" },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            参加の流れ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 学生向け */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-10 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                学生向け
              </div>
              <h3 className="text-3xl font-bold text-gray-900"></h3>
            </div>
            <div className="space-y-6">
              {studentSteps.map((item) => (
                <div key={item.step} className="group flex items-start p-4 rounded-xl hover:bg-white/50 transition-all">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 企業向け */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-10 shadow-2xl border border-emerald-100 hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                企業向け
              </div>
              <h3 className="text-3xl font-bold text-gray-900"></h3>
            </div>
            <div className="space-y-6">
              {companySteps.map((item) => (
                <div key={item.step} className="group flex items-start p-4 rounded-xl hover:bg-white/50 transition-all">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

