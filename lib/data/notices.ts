export type Notice = {
  id: string;
  title: string;
  date: string;
  summary: string;
  href?: string;
};

export const notices: Notice[] = [
  {
    id: "2026-02-establishment",
    title: "EmeRize設立のお知らせ",
    date: "2026.02",
    summary:
      "マレーシアと日本をつなぐキャリアプラットフォームとして、EmeRizeを設立しました。学生キャリアコミュニティの運営やキャリアイベントの企画・運営を通じ、マレーシアで学ぶ学生と日本企業をつなぐ活動を進めてまいります。",
  },
];
