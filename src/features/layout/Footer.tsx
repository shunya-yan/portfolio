import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // 作成したGoogleフォームのURL
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeFUdYm3c2w7CDRWJhgOuDTPonC7UR_yv_V8bOuDRyZOs21nQ/viewform?usp=header";

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="survey-container">
          <p className="survey-message">
            ▼ ポートフォリオの評価実験にご協力お願いします ▼
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="survey-button"
          >
            アンケートに回答する
          </a>
        </div>

        <p className="copyright">
          &copy; {currentYear} Shunya Shimizu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
