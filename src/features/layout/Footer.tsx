import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} あなたの名前. All Rights Reserved.</p>
    </footer>
  );
};