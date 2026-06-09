import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src="/images/ai-logo.png" alt="Cabz Tours" style={{height: '50px', marginBottom: '22px'}} />
              <p>Turning Every Trip into a Beautiful Memory. Your trusted travel partner for premium tour packages and taxi services across Kerala.</p>
              <div className="social-links">
                <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/cabz_tours/" target="_blank" rel="noreferrer" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/service">Our Services</Link></li>
                <li><Link href="/tour-packages">Tour Packages</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link href="/service">Airport Pickup</Link></li>
                <li><Link href="/service">Pilgrimage Tours</Link></li>
                <li><Link href="/service">Holiday Packages</Link></li>
                <li><Link href="/service">Custom Tours</Link></li>
                <li><Link href="/service">Taxi Service</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Office</h4>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Cabz Tours, DOOR NO: 1613, 2/1149/A/104, HILITE BUISNESS PARK, IRINGALLUR, KOZHIKODE 673014, KERALA INDIA</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919744312600">+91 97443 12600</a>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:cabztours@gmail.com">cabztours@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Designed by Empireae &copy; 2026 All Rights Reserved</p>
            <p><Link href="/" style={{color: 'var(--primary)'}}>Cabz Tours</Link> — Kozhikode, Kerala</p>
          </div>
        </div>
      </footer>
      <a href="https://wa.me/919744312600" className="whatsapp-btn" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
