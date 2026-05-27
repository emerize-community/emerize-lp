export const siteNavItems = [
  { label: "ホーム", href: "/" },
  { label: "プロジェクト", href: "/projects" },
  { label: "会社概要", href: "/about" },
  { label: "企業向け", href: "/company" },
  { label: "学生向け", href: "/student" },
  { label: "メンバー", href: "/members" },
  { label: "お知らせ", href: "/notice" },
] as const;

export const footerSiteLinks = [
  ...siteNavItems,
  { label: "お問い合わせ", href: "/contact" },
] as const;
