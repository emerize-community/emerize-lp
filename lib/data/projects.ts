export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: "apu-marketing",
    title: "APU学生マーケティングプロジェクト",
    description:
      "APUキャンパスで実施した、学生主体のマーケティング・ポップアッププロジェクトです。",
    category: "マーケティング",
  },
  {
    id: "yusaco-survey",
    title: "株式会社ユサコとの共同アンケート調査",
    description:
      "マレーシアの大学生を対象とした、共同によるアンケート調査プロジェクトです。",
    category: "市場調査",
  },
  {
    id: "career-events",
    title: "学生キャリアイベント",
    description:
      "大学生向けのキャリア関連コミュニティイベントの企画・運営を行いました。",
    category: "コミュニティ",
  },
];
