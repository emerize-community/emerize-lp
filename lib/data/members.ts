export type MemberRole = "Founder" | "Advisor";

export type Member = {
  id: string;
  name: string;
  title: string;
  role: MemberRole;
  affiliation?: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
};

export const members: Member[] = [
  {
    id: "miyake-yamato",
    name: "三宅 倭翔",
    title: "代表取締役",
    role: "Founder",
    affiliation: "APU大学マレーシア在籍",
    image: "/members/yamato.jpg",
    bio: "マレーシアを拠点に、マレーシアと日本をつなぐキャリア機会の創出に取り組んでいます。学生と企業の新しい接点づくりを推進しています。",
  },
  {
    id: "sugiyama-ayaka",
    name: "杉山 絢香",
    title: "取締役",
    role: "Founder",
    affiliation: "モナッシュ大学在籍",
    image: "/members/ayaka.jpg",
    bio: "学生コミュニティの運営・イベント企画を担当。学生が一歩を踏み出せる場づくりと、企業との架け橋となるプログラムの設計に携わっています。",
  },
  {
    id: "okamoto-yutaro",
    name: "岡本 祐太郎",
    title: "アドバイザー",
    role: "Advisor",
    image: "/members/okamoto.jpg",
    bio: "グローバル人材・採用領域での知見を活かし、EmeRizeの事業設計や企業連携のアドバイスをしています。",
  },
];
