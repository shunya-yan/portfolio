import './Profile.css';

export const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-content">
        <div className="profile-left">
          <img
            src="img/プロフィール写真3.jpg"
            alt="プロフィール写真"
            className="profile-image"
          />
          <h3 className="profile-name">清水 駿也</h3>
        </div>
        <div className="profile-text">
          <h2 className="profile-title">自分の関わるプロジェクトで人々を笑顔に</h2>
          <p className="profile-description">
            課題を分析するコンサルティング的な視点と、
            それを形にするプランニング的な発想の両面から、
            使う人に寄り添った提案・設計を行うことを心がけています。
          </p>

          <h3 className="tech-title">経験と技術</h3>
          <div className="experience-highlights">
            <div className="experience-item">
              <h4>バックエンド開発</h4>
              <p>Python (Django) を用いたサーバーサイドの設計・構築</p>
            </div>
            <div className="experience-item">
              <h4>フロントエンド開発</h4>
              <p>TypeScript, React を用いたコンポーネントベースのUI設計・実装</p>
            </div>
            <div className="experience-item">
              <h4>先進技術の探求</h4>
              <p>RAG を導入したアプリケーション開発など、新しい技術領域への挑戦</p>
            </div>
          </div>
          <p className="profile-summary">
            これらのプロジェクトでは、設計から実装まで一気通貫で携わることで、ユーザーに価値を届けるための最適なアーキテクチャを追求してきました。この経験で培った、技術の深い理解に基づいたUI/UX設計と、それを形にする確かな実装力の両方を強みとしています。
          </p>
        </div>
      </div>
    </section>
  );
};

