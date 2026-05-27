export const COMPANY = {
  name: "株式会社EmeRize",
  nameEn: "EmeRize Inc.",
  nameWithReading: "EmeRize株式会社（エマライズ）",
  corporateNumber: "1011101115123",
  representative: "三宅 倭翔（みやけ やまと）",
  director: "杉山 絢香（すぎやま あやか）",
  advisor: "岡本 祐太郎（おかもと ゆうたろう）",
  email: "info@emerizeofficial.com",
  address: "東京都新宿区西新宿5-24-16",
  addressJa: "東京都新宿区西新宿5-24-16",
  teikanPdfPath: "/documents/teikan_株式会社EmeRize_1539255.pdf",
  established: "2026年2月",
  businessItems: [
    "学生キャリアコミュニティの運営",
    "オンラインキャリアイベントの企画・運営",
    "学生マーケティングプロジェクト",
    "市場調査・アンケート調査プロジェクト",
    "教育・コミュニティ事業",
  ],
  aboutJa: [
    "株式会社EmeRizeは、海外の大学生を対象に、キャリアコミュニティの運営、オンラインイベント、マーケティングプロジェクト、市場調査など、教育・コミュニティを軸とした事業を展開しています。",
    "学生には実践的な学びの機会を、企業には学生を起点としたマーケティング・調査の支援を通じて、双方に価値のある接点をつくります。",
  ],
} as const;

/** 役職名からふりがなを除いた表示名を返す */
export function getShortName(full: string): string {
  return full.replace(/\s*（[^）]+）\s*$/, "").trim();
}
