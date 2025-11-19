import './Contact.css';

export const Contact = () => {
  const subject = encodeURIComponent("ポートフォリオからのお問い合わせ");
  const body = encodeURIComponent("お名前：\n\nお問い合わせ内容：");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shunyan127@gmail.com&su=${subject}&body=${body}`;

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        お仕事のご相談やご依頼など、お気軽にご連絡ください。
      </p>
      <div className="contact-links">
        <a 
          href={gmailUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link email"
        >
          Email
        </a>
        
        <a 
          href="https://x.com/shunya_yan127"
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link x-twitter"
        >
          X (Twitter)
        </a>
      </div>
    </section>
  );
};