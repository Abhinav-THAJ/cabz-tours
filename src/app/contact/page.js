import Link from 'next/link';

export const metadata = {
  title: 'Cabz Tours | Contact',
};

export default function Contact() {
  return (
    <main>

  {/*  Page Hero  */}
  <section className="hero page-hero">
    <div className="hero-bg">
      <img src="/images/contact-hero.png" alt="Contact Cabz Tours" />
    </div>
    <div className="container">
      <div className="hero-content">
        <h1 className="text-gradient">Connect with Us for Any Questions or Concerns</h1>
        <p>We're always ready to help you plan your perfect Kerala journey.</p>
      </div>
    </div>
  </section>

  {/*  Contact Section  */}
  <section className="section-padding">
    <div className="container">
      <div className="split-section">
        {/*  Contact Info  */}
        <div>
          <span className="accent-text">Get in Touch</span>
          <h2 className="text-gradient" style={{fontSize: 'clamp(28px,3.5vw,44px)', marginBottom: '16px'}}>Plan Your Next Journey</h2>
          <p style={{color: 'var(--text-dim)', marginBottom: '10px'}}>Whether you have a question about our packages, pricing, or anything else, our team is ready to answer all your questions.</p>

          <div className="contact-info-icons">
            <div className="contact-info-item">
              <div className="ci-icon"><i className="fa-solid fa-phone"></i></div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+919744312600">+91 97443 12600</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/919744312600" target="_blank">+91 97443 12600</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:cabztours@gmail.com">cabztours@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="ci-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <h4>Our Office</h4>
                <p>DOOR NO: 1613, 2/1149/A/104<br />HILITE BUISNESS PARK, IRINGALLUR<br />KOZHIKODE 673014, KERALA INDIA</p>
              </div>
            </div>
          </div>

          <h4 style={{marginBottom: '16px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px'}}>Follow Our Social Media</h4>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/cabz_tours/" target="_blank" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/*  Contact Form  */}
        <div className="contact-form-box">
          <h3 style={{marginBottom: '24px', fontSize: '22px'}}>Send Us a Message</h3>
          <form id="contactForm" onsubmit="handleSubmit(event)">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Your Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your Email Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service">
                <option value="">Select a Service</option>
                <option>Airport Pickup / Drop</option>
                <option>Tour Package</option>
                <option>Pilgrimage Tour</option>
                <option>Outstation Taxi</option>
                <option>Group Travel</option>
                <option>Custom Trip Planning</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your travel plans, dates, group size, destinations…"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%', fontSize: '16px', padding: '16px'}}>
              Send Message <i className="fa-solid fa-paper-plane" style={{marginLeft: '8px'}}></i>
            </button>
            <div id="successMsg" style={{display: 'none', marginTop: '20px', padding: '16px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '10px', color: '#25D366', textAlign: 'center'}}>
              <i className="fa-solid fa-circle-check" style={{marginRight: '8px'}}></i> Thank you! We'll get back to you soon.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/*  Google Map  */}
  <section style={{paddingBottom: '100px'}}>
    <div className="container">
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=HiLITE%20Business%20Park,%20Kozhikode&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
  
    </main>
  );
}
