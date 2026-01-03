import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電子公告 - EmeRize",
  description: "EmeRizeの電子公告ページ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NoticePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">電子公告</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              このページは、EmeRizeの電子公告を掲載するページです。
            </p>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">公告事項</h2>
              <p className="text-gray-600">
                現在、公告事項はございません。
              </p>
            </section>

            <section className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
              <p className="text-gray-600">
                電子公告に関するお問い合わせは、<a href="/#contact" className="text-blue-600 hover:underline">お問い合わせフォーム</a>よりご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

