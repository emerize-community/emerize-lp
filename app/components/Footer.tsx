export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* 団体概要 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">団体概要</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  私たちについて
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  運営メンバー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  沿革
                </a>
              </li>
            </ul>
          </div>

          {/* プライバシー */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">プライバシー</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  お問い合わせフォーム
                </a>
              </li>
              <li>
                <a href="mailto:contact@emerize.jp" className="hover:text-white transition-colors">
                  contact@emerize.jp
                </a>
              </li>
            </ul>
          </div>

          {/* 電子公告 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">その他</h3>
            <ul className="space-y-2">
              <li>
                <a href="/notice" className="hover:text-white transition-colors">
                  電子公告
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} EmeRize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

