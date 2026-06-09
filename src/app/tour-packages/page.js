import Link from 'next/link';

export const metadata = {
  title: 'Best Kerala Tour Packages | Munnar, Alleppey & More',
  description: 'Discover the best Kerala tour packages with Cabz Tours. Explore Munnar, Alleppey backwaters, Kochi, Wayanad, and spiritual pilgrimage destinations.',
};

export default function TourPackages() {
  return (
    <main>

  {/*  Page Hero  */}
  <section className="hero page-hero">
    <div className="hero-bg">
      <img src="/images/kerala-garden.png" alt="Tour Packages" />
    </div>
    <div className="container">
      <div className="hero-content">
        <h1 className="text-gradient">Travel to Kerala, where every journey becomes a beautiful memory</h1>
        <p>Discover our carefully crafted tour packages designed for every kind of traveler.</p>
      </div>
    </div>
  </section>

  {/*  Packages Section  */}
  <section className="section-padding">
    <div className="container">
      <div className="section-header">
        <span className="accent-text">Explore</span>
        <h2 className="text-gradient">Our Tour Packages</h2>
        <p>We offer a variety of packages to suit every traveler's needs and preferences</p>
      </div>
      <div className="tours-grid" style={{gridTemplateColumns: 'repeat(2,1fr)'}}>
        {/*  Package 1  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/kerala-garden.png" alt="Munnar Hill Station Package" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-clock" style={{marginRight: '6px'}}></i>3 Days / 2 Nights</span>
            <h3>Munnar Hill Station Escape</h3>
            <p>Explore the lush tea gardens, misty hills, and stunning waterfalls of Munnar — Kerala's most beautiful hill station.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
        {/*  Package 2  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/kerala-houseboat.png" alt="Alleppey Backwater Package" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-clock" style={{marginRight: '6px'}}></i>2 Days / 1 Night</span>
            <h3>Alleppey Backwater Cruise</h3>
            <p>Experience the serene backwaters of Kerala aboard a luxury houseboat and discover the charm of Alappuzha.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
        {/*  Package 3  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/service-driver.png" alt="Kerala Spiritual Journey" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-clock" style={{marginRight: '6px'}}></i>5 Days / 4 Nights</span>
            <h3>Kerala Spiritual Journey</h3>
            <p>A peaceful pilgrimage covering the most sacred temples across Kerala, organized for comfort and devotion.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
        {/*  Package 4  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/about-driver.png" alt="Wayanad Nature Package" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-clock" style={{marginRight: '6px'}}></i>3 Days / 2 Nights</span>
            <h3>Wayanad Nature Retreat</h3>
            <p>Discover the wild beauty of Wayanad — lush forests, tribal villages, waterfalls, and wildlife at its finest.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
        {/*  Package 5  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/contact-hero.png" alt="Kochi City Tour" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-clock" style={{marginRight: '6px'}}></i>2 Days / 1 Night</span>
            <h3>Kochi Heritage &amp; Culture</h3>
            <p>Explore Fort Kochi, Chinese fishing nets, Mattancherry palace, and the vibrant cultural tapestry of Cochin.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
        {/*  Package 6  */}
        <div className="tour-card" style={{height: '480px'}}>
          <img src="/images/hero-car.png" alt="Custom Kerala Package" />
          <div className="tour-overlay">
            <span className="tour-location"><i className="fa-solid fa-sliders" style={{marginRight: '6px'}}></i>Flexible Duration</span>
            <h3>Custom Kerala Discovery</h3>
            <p>Design your own Kerala itinerary. Choose your destinations, duration, and group size — we plan the rest.</p>
            <a href="/contact" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 22px', fontSize: '14px'}}>Enquire Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Why Book With Us  */}
  <section className="section-padding" style={{background: '#050505'}}>
    <div className="container">
      <div className="section-header">
        <span className="accent-text">Benefits</span>
        <h2 className="text-gradient">Why Book With Cabz Tours</h2>
        <p>We make every package worry-free and value-packed</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
          <h3>100% Safe Travel</h3>
          <p>Verified drivers, well-maintained vehicles, and comprehensive travel support throughout your trip.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-tags"></i></div>
          <h3>Best Price Guarantee</h3>
          <p>Competitive pricing with full transparency. No hidden charges, no surprises — just great value.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><i className="fa-solid fa-sliders"></i></div>
          <h3>Fully Customizable</h3>
          <p>Tailor any package to your group size, dates, interests, and budget. We make it work for you.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  CTA  */}
  <section className="section-padding cta-section">
    <div className="container">
      <h2 className="text-gradient">Can't Find the Right Package?</h2>
      <p>Tell us your dream destination and we'll create a custom Kerala tour package just for you.</p>
      <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/contact" className="btn btn-primary">Plan Custom Tour</a>
        <a href="tel:+919744312600" className="btn btn-outline">Call Now</a>
      </div>
    </div>
  </section>
  
    </main>
  );
}
