import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        お仕事のご相談やご依頼など、お気軽にご連絡ください。
      </p>
      <div className="contact-links">
        {/* 'your.email@example.com' をご自身のメールアドレスに書き換えてください */}
        <a href="mailto:your.email@example.com" className="contact-link email">
          Email
        </a>
        {/* 'your_x_username' をご自身のXのユーザー名に書き換えてください */}
        <a 
          href="https://x.com/your_x_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link x-twitter"
        >
          X (Twitter)
        </a>
        {/* 必要であればGitHubアカウントへのリンクなどを追加するのも良いでしょう */}
      </div>
    </section>
  );
};