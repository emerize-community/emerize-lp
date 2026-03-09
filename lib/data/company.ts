export const COMPANY = {
  name: "株式会社EmeRize",
  nameWithReading: "EmeRize株式会社（エマライズ）",
  representative: "三宅 倭翔（みやけ やまと）",
  director: "杉山 絢香（すぎやま あやか）",
  advisor: "岡本 祐太郎（おかもと ゆうたろう）",
  email: "weareemerize@gmail.com",
  contactFormUrl: "https://forms.gle/D4HRzm67GtQzm5ccA",
  teikanPdfPath: "/documents/teikan_株式会社EmeRize_1539255.pdf",
  established: "2026年2月",
  address: "東京都新宿区",
  businessItems: [
    "学生キャリアコミュニティの運営",
    "キャリアイベントの企画・運営",
    "学生向けキャリア支援サービスの提供",
    "企業と学生をつなぐマーケティング支援",
    "学生マーケティングおよび市場調査",
  ],
} as const;

/** 役職名からふりがなを除いた表示名を返す */
export function getShortName(full: string): string {
  return full.replace(/\s*（[^）]+）\s*$/, "").trim();
}
