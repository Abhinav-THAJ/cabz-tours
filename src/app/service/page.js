import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Tour Packages, Pilgrimage & Taxi in Kerala',
  description: 'Explore our wide range of services including Kerala tour packages, pilgrimage tours, weekend getaways, outstation taxis, and 9/12/17 seater travellers.',
};

export default function Service() {
  return (
    <main>

  {/*  Page Hero  */}
  <section className="hero page-hero">
    <div className="hero-bg">
      <img src="/images/service-driver.png" alt="Our Services" />
    </div>
    <div className="container">
      <div className="hero-content">
        <h1 className="text-gradient">Experience Convenience — Our Service Offerings</h1>
        <p>Reliable, professional, and comfortable travel services across Kerala and South India.</p>
      </div>
    </div>
  </section>

  {/*  Services Grid  */}
  <section className="section-padding">
    <div className="container">
      <div className="section-header">
        <span className="accent-text">What We Offer</span>
        <h2 className="text-gradient">Our Services</h2>
        <p>Everything you need for a perfect travel experience</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-plane-arrival"></i></div>
          <h3>Airport Pickup &amp; Drop</h3>
          <p>Reliable and punctual airport transfer services. We track your flight and ensure our driver is waiting for you at the arrival terminal with a name board.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-person-praying"></i></div>
          <h3>Pilgrimage Tours</h3>
          <p>Dedicated packages for temple visits and religious tours across South India. Comfortable vehicles and drivers familiar with all major pilgrimage sites.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-mountain-sun"></i></div>
          <h3>Sightseeing Tours</h3>
          <p>Explore the natural beauty of Kerala with our expert-guided sightseeing tours to Munnar, Alleppey, Wayanad, Thrissur, and more breathtaking locations.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-car-side"></i></div>
          <h3>Corporate Taxi Service</h3>
          <p>Professional transportation solutions for business meetings, corporate events, airport transfers, and employee commuting with punctuality guaranteed.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-users"></i></div>
          <h3>Group Travel</h3>
          <p>Large vehicles including 9-seater, 12-seater tempo travellers and buses for family gatherings, school trips, picnics, and large group outings.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
          <h3>24/7 Availability</h3>
          <p>Our services are available round the clock. Whether it's a late-night flight or an early-morning emergency trip, we are always here for you.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-suitcase-rolling"></i></div>
          <h3>Holiday Packages</h3>
          <p>Curated holiday packages covering the best of Kerala including houseboats, hill stations, beaches, and wildlife sanctuaries for families and couples.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-van-shuttle"></i></div>
          <h3>Outstation Taxi</h3>
          <p>Safe and affordable outstation trips from Calicut (Kozhikode) to Bangalore, Chennai, Coimbatore, Ooty, Mysore, and all South Indian destinations.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-sliders"></i></div>
          <h3>Custom Trip Planning</h3>
          <p>Customized travel plans carefully designed around your destination, group size, schedule, and budget — your journey, your way.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  How It Works  */}
  <section className="section-padding" style={{background: '#050505'}}>
    <div className="container">
      <div className="section-header">
        <span className="accent-text">Process</span>
        <h2 className="text-gradient">How It Works</h2>
        <p>Booking your perfect trip with Cabz Tours is simple and fast</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '28px'}} className="how-grid">
        <div className="why-card" style={{textAlign: 'center'}}>
          <div className="why-icon" style={{margin: '0 auto 20px'}}><span style={{fontSize: '22px', fontWeight: '800', color: 'var(--primary)'}}>01</span></div>
          <h3>Choose a Service</h3>
          <p>Browse our services and packages to find the one that fits your needs.</p>
        </div>
        <div className="why-card" style={{textAlign: 'center'}}>
          <div className="why-icon" style={{margin: '0 auto 20px'}}><span style={{fontSize: '22px', fontWeight: '800', color: 'var(--primary)'}}>02</span></div>
          <h3>Contact Us</h3>
          <p>Call, WhatsApp, or fill out the contact form with your travel details.</p>
        </div>
        <div className="why-card" style={{textAlign: 'center'}}>
          <div className="why-icon" style={{margin: '0 auto 20px'}}><span style={{fontSize: '22px', fontWeight: '800', color: 'var(--primary)'}}>03</span></div>
          <h3>Get a Quote</h3>
          <p>We'll send you a transparent, no-hidden-cost quote within hours.</p>
        </div>
        <div className="why-card" style={{textAlign: 'center'}}>
          <div className="why-icon" style={{margin: '0 auto 20px'}}><span style={{fontSize: '22px', fontWeight: '800', color: 'var(--primary)'}}>04</span></div>
          <h3>Travel &amp; Enjoy</h3>
          <p>Sit back, relax, and enjoy your perfectly planned journey with Cabz.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  CTA  */}
  <section className="section-padding cta-section">
    <div className="container">
      <h2 className="text-gradient">Ready to Start Your Journey?</h2>
      <p>Contact us today to get a personalized quote for your travel requirements. We're available 24/7 to assist you.</p>
      <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/contact" className="btn btn-primary">Book Now</a>
        <a href="tel:+919744312600" className="btn btn-outline">Call Us</a>
      </div>
    </div>
  </section>
  
    </main>
  );
}
