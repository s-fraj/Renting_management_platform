import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-brand">UniRent</span>
          <p className="footer-copyright">© 2024 UniRent Tunisia. Editorial Nomad Series.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
