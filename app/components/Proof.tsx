export default function Proof() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          実績
        </h2>
        
        {/* 数字の実績 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 lg:p-8 text-center shadow-md">
            <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">参加学生数</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 lg:p-8 text-center shadow-md">
            <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">開催イベント数</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 lg:p-8 text-center shadow-md">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-700 font-medium">連携企業数</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 lg:p-8 text-center shadow-md">
            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-700 font-medium">マレーシア拠点</div>
          </div>
        </div>

        {/* 写真プレースホルダー */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center shadow-md">
              <div className="text-gray-400 text-lg">イベント写真 {i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

