import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section 1 */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero-car.png" alt="Premium Tour Experience" width="1920" height="900" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-gradient">Discover Beautiful Destinations with Our Premium Tour Packages</h1>
            <p>Complete holiday and pilgrimage packages with comfortable vehicles and expert drivers.</p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary">Book Your Ride</Link>
              <Link href="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories Section */}
      <section className="section-padding vehicles-section">
        <div className="container">
          <div className="section-header">
            <span className="accent-text">Our Fleet</span>
            <h2 className="text-gradient">Choose Your Ride</h2>
            <p>Comfortable vehicles for every group size and travel need</p>
          </div>
          <div className="vehicles-grid">
            <div className="vehicle-card">
              <img src="/images/hero-car.png" alt="Cabz Regular Sedan" className="vehicle-img" />
              <div className="vehicle-info">
                <h3>Cabz Regular</h3>
                <p>1 – 4 Passengers</p>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="/images/about-driver.png" alt="Cabz Car MUV" className="vehicle-img" />
              <div className="vehicle-info">
                <h3>Cabz Car</h3>
                <p>1 – 6 Passengers</p>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="/images/service-driver.png" alt="Cabz Traveller" className="vehicle-img" />
              <div className="vehicle-info">
                <h3>Cabz Traveller</h3>
                <p>7 – 35 Passengers</p>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="/images/kerala-houseboat.png" alt="Cabz Bus" className="vehicle-img" />
              <div className="vehicle-info">
                <h3>Cabz Bus</h3>
                <p>20+ Passengers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 – Explore Kerala */}
      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container">
          <div className="split-section">
            <div className="split-image">
              <img src="/images/kerala-houseboat.png" alt="Kerala Backwaters Houseboat" loading="lazy" width="700" height="500" />
            </div>
            <div className="split-content">
              <span className="accent-text">Why Choose Us</span>
              <h2 className="text-gradient">Explore Kerala the Easy Way — Book Your Cab & Tours with Cabz</h2>
              <p>Comfortable cab services and customized Kerala tour packages for international travelers. Travel safely, explore beautiful destinations, and enjoy a hassle-free journey with Cabz Tours.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h4>100+</h4>
                  <p>Successfully Completed Tour Packages</p>
                </div>
                <div className="stat-item">
                  <h4>100+</h4>
                  <p>Happy Travelers Served</p>
                </div>
              </div>
              <div style={{marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <a href="tel:+919744312600" className="btn btn-primary">Book Your Cab</a>
                <Link href="/tour-packages" className="btn btn-outline">Explore Tours</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="accent-text">What We Offer</span>
            <h2 className="text-gradient">Explore More</h2>
            <p>Tailored travel experiences for every kind of journey</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-suitcase-rolling"></i></div>
              <h3>Tour Packages</h3>
              <p>Customized holiday, pilgrimage, and group tour packages planned for a perfect travel experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-van-shuttle"></i></div>
              <h3>Traveller Services</h3>
              <p>Comfortable 9 / 12 / 17 Seater traveller options for group travel across Kerala and South India.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-car-side"></i></div>
              <h3>Outstation Taxi</h3>
              <p>Safe and reliable taxi services designed for sightseeing, outstation trips, and city transfers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-person-praying"></i></div>
              <h3>Pilgrimage Tours</h3>
              <p>Well-organized temple and devotional tour packages designed for peaceful journeys and comfortable travel experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-calendar-days"></i></div>
              <h3>Weekend Getaways</h3>
              <p>Short and well-planned 1–2 day trip packages designed for relaxation, sightseeing, and memorable travel experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-briefcase"></i></div>
              <h3>Custom Trip Planning</h3>
              <p>Customized travel plans carefully designed around your destination, group size, schedule, and budget requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Tour Packages */}
      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container">
          <div className="section-header">
            <span className="accent-text">Featured</span>
            <h2 className="text-gradient">Our Best Tour Packages</h2>
            <p>Choose from our wide range of carefully curated travel experiences</p>
          </div>
          <div className="tours-grid">
            <div className="tour-card">
              <img src="/images/kerala-garden.png" alt="Munnar Tea Gardens" />
              <div className="tour-overlay">
                <span className="tour-location">Munnar, Kerala</span>
                <h3>Hill Station Magic</h3>
                <Link href="/tour-packages" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 20px', fontSize: '14px'}}>View Package</Link>
              </div>
            </div>
            <div className="tour-card">
              <img src="/images/kerala-houseboat.png" alt="Alleppey Backwaters" />
              <div className="tour-overlay">
                <span className="tour-location">Alleppey, Kerala</span>
                <h3>Backwater Bliss</h3>
                <Link href="/tour-packages" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 20px', fontSize: '14px'}}>View Package</Link>
              </div>
            </div>
            <div className="tour-card">
              <img src="/images/service-driver.png" alt="Pilgrimage Tour" />
              <div className="tour-overlay">
                <span className="tour-location">Spiritual South</span>
                <h3>Devotional Journey</h3>
                <Link href="/tour-packages" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '10px 20px', fontSize: '14px'}}>View Package</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding instagram-section" id="instagram">
        <div className="container">
          <div className="section-header">
            <span className="accent-text">Social</span>
            <h2 className="text-gradient">Instagram Feed</h2>
            <p>Follow us <a href="https://www.instagram.com/cabz_tours/" target="_blank" rel="noreferrer" style={{color: 'var(--primary)'}}>@cabz_tours</a> for travel inspiration and updates</p>
          </div>

          <div id="insta-live-feed" style={{minHeight: '360px'}}>
            <div className="insta-grid" id="instaFallback">
              <div className="insta-item">
                <img src="/images/hero-car.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
              <div className="insta-item">
                <img src="/images/kerala-garden.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
              <div className="insta-item">
                <img src="/images/kerala-houseboat.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
              <div className="insta-item">
                <img src="/images/about-driver.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
              <div className="insta-item">
                <img src="/images/service-driver.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
              <div className="insta-item">
                <img src="/images/contact-hero.png" alt="Cabz Tours Instagram" />
                <div className="insta-hover"><i className="fa-brands fa-instagram fa-2x"></i></div>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <a href="https://www.instagram.com/cabz_tours/" target="_blank" rel="noreferrer" className="btn btn-orange-outline">
              <i className="fa-brands fa-instagram" style={{marginRight: '8px'}}></i> Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
