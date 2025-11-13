import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} 清水 俊也/Shimizu Shunya.</p>
    </footer>
  );
};