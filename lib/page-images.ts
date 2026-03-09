/**
 * 各ページで表示する写真のパスを一元管理します。
 * 写真を有効にするには、対応するファイルを public 以下に配置し、
 * ここでパスを指定してください。
 *
 * 例: ホームのヒーロー写真を有効にする
 *   public/images/home/hero.jpg を配置し、
 *   homeHero: "/images/home/hero.jpg" を設定
 */
export const PAGE_IMAGES = {
  /** ホーム（Hero 右側） */
  homeHero: null as string | null,

  /** 会社概要（タイトル下） */
  aboutHero: null as string | null,

  /** お問い合わせ（タイトル下） */
  contactHero: null as string | null,

  /** お知らせ（タイトル下） */
  noticeHero: null as string | null,

  /** 企業向け（タイトル下） */
  companyHero: null as string | null,

  /** 学生向け（タイトル下） */
  studentHero: null as string | null,

  /** メンバー（タイトル下） */
  membersHero: null as string | null,

  /** プライバシーポリシー（タイトル下） */
  privacyHero: null as string | null,
} as const;
