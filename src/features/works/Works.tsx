import { WorkCard, type Work } from "./components/WorkCard";
import "./Works.css";

const worksData: Work[] = [
  {
    id: 1,
    title: "ポートフォリオサイト (This Site)",
    description:
      "React, TypeScript, そしてクリーンなフォルダ構成で作成し、UI比較を行うことができるこのポートフォリオサイトです。",
    imageUrl: "img/portfolio.gif",
    tech: ["React", "TypeScript", "CSS"],
    url: "#",
    githubUrl: "https://github.com/shunya-yan/portfolio",
  },
  {
    id: 2,
    title: "RAG導入Webサイト（法律に特化したai）",
    description:
      "大学のチーム開発で、Python (Django) を用いたバックエンドの設計と実装を担当しました。",
    imageUrl: "/img/デモ.gif",
    tech: ["Python", "Django"],
    url: "#",
    githubUrl: "https://github.com/shunya-yan/ict_django_group3",
  },
];

export const Works = () => {
  return (
    <section id="works" className="works-section">
      <h2>Works</h2>
      <div className="works-grid">
        {worksData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};
