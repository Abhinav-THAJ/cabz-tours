import Link from 'next/link';

export const metadata = {
  title: 'About Cabz Tours | Travel Agency in Kozhikode',
  description: 'Learn about Cabz Tours, the leading travel agency in Kozhikode offering safe, affordable, and fully customizable Kerala tour packages and taxi services.',
};

export default function About() {
  return (
    <main>

  {/*  Page Hero  */}
  <section className="hero page-hero">
    <div className="hero-bg">
      <img src="/images/about-driver.png" alt="About Cabz Tours" />
    </div>
    <div className="container">
      <div className="hero-content">
        <h1 className="text-gradient">Experts in Tour Packages &amp; Travel Solutions</h1>
        <p>We turn every trip into a beautiful memory with professional drivers and curated experiences.</p>
      </div>
    </div>
  </section>

  {/*  Our Story  */}
  <section className="section-padding">
    <div className="container">
      <div className="split-section">
        <div className="split-content">
          <span className="accent-text">Our Story</span>
          <h2 className="text-gradient">A Journey of Excellence</h2>
          <p>Cabz Tours was founded with a single mission: to provide comfortable, safe, and memorable travel experiences across the beautiful landscape of Kerala. With years of experience in the travel industry, we have grown into a trusted name for both locals and tourists.</p>
          <p>We believe that travel is not just about reaching a destination; it's about the stories you create along the way. That's why we focus on every detail, from the comfort of our vehicles to the professionalism of our drivers.</p>
          <ul className="values-list">
            <li><i className="fa-solid fa-check"></i><span><strong>Safety First:</strong> Your safety is our top priority on every journey.</span></li>
            <li><i className="fa-solid fa-check"></i><span><strong>Customer Satisfaction:</strong> We go the extra mile to make you smile.</span></li>
            <li><i className="fa-solid fa-check"></i><span><strong>Transparency:</strong> No hidden costs, just honest and fair service.</span></li>
            <li><i className="fa-solid fa-check"></i><span><strong>Expert Drivers:</strong> Professional, friendly and experienced drivers.</span></li>
          </ul>
          <div style={{marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <a href="/contact" className="btn btn-primary">Book a Tour</a>
            <a href="/tour-packages" className="btn btn-outline">View Packages</a>
          </div>
        </div>
        <div className="split-image">
          <img src="/images/kerala-garden.png" alt="Kerala Tourism" />
        </div>
      </div>
    </div>
  </section>

  {/*  Stats Bar  */}
  <section className="section-padding stats-bar-section">
    <div className="container">
      <div className="stats-bar-grid">
        <div className="stats-bar-item">
          <h4>100+</h4>
          <p>Tours Completed</p>
        </div>
        <div className="stats-bar-item">
          <h4>50+</h4>
          <p>Professional Drivers</p>
        </div>
        <div className="stats-bar-item">
          <h4>1000+</h4>
          <p>Happy Clients</p>
        </div>
        <div className="stats-bar-item">
          <h4>24/7</h4>
          <p>Support Available</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Progress / Skills Section  */}
  <section className="section-padding progress-section">
    <div className="container">
      <div className="split-section">
        <div className="split-image">
          <img src="/images/kerala-houseboat.png" alt="Kerala Houseboat Tour" />
        </div>
        <div className="split-content">
          <span className="accent-text">Our Expertise</span>
          <h2 className="text-gradient">Turning Every Trip into a Beautiful Memory</h2>
          <p>Enjoy a hassle-free journey with Cabz Tours. From family holidays and pilgrimage trips to corporate and group tours, our team ensures smooth coordination and comfortable travel.</p>
          <div style={{marginTop: '36px'}}>
            <div className="progress-item">
              <div className="progress-header"><span>Customer Satisfaction</span><span className="pct">98%</span></div>
              <div className="progress-bar"><div className="progress-fill" data-width="98"></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-header"><span>On-Time Service</span><span className="pct">95%</span></div>
              <div className="progress-bar"><div className="progress-fill" data-width="95"></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-header"><span>Safe Journeys</span><span className="pct">100%</span></div>
              <div className="progress-bar"><div className="progress-fill" data-width="100"></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-header"><span>Tour Completion Rate</span><span className="pct">97%</span></div>
              <div className="progress-bar"><div className="progress-fill" data-width="97"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Why Choose Us  */}
  <section className="section-padding" style={{background: '#050505'}}>
    <div className="container">
      <div className="section-header">
        <span className="accent-text">Benefits</span>
        <h2 className="text-gradient">Why Choose Cabz Tours</h2>
        <p>We go above and beyond to make every journey special</p>
      </div>
      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-shield-halved"></i></div>
          <h3>Safe & Trusted</h3>
          <p>All our drivers are background-verified, experienced, and trained in safe driving practices across Kerala's diverse terrain.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-tags"></i></div>
          <h3>Affordable Pricing</h3>
          <p>Competitive and transparent pricing with no hidden charges. Get the best value for your travel budget.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-clock"></i></div>
          <h3>Punctual &amp; Reliable</h3>
          <p>We value your time. Our drivers are always on schedule, ensuring your trips begin and end as planned.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-map-location-dot"></i></div>
          <h3>Local Expertise</h3>
          <p>Deep knowledge of Kerala's roads, destinations, and hidden gems, ensuring the best travel experience for you.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-headset"></i></div>
          <h3>24/7 Support</h3>
          <p>Round-the-clock customer support available to assist you at any stage of your journey.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><i className="fa-solid fa-sliders"></i></div>
          <h3>Customizable Trips</h3>
          <p>Your journey, your way. We tailor every itinerary to match your preferences, schedule, and group size.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  FAQ Accordion  */}
  <section className="section-padding">
    <div className="container">
      <div className="section-header">
        <span className="accent-text">FAQ</span>
        <h2 className="text-gradient">Frequently Asked Questions</h2>
        <p>Everything you need to know before booking with Cabz Tours</p>
      </div>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <div className="accordion-item">
          <div className="accordion-header" onclick="toggleAcc(this)">
            <span>How do I book a cab or tour package?</span>
            <span className="acc-icon"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="accordion-body">
            <p>You can book by calling us directly at +91 97443 12600, sending a WhatsApp message, or filling out the contact form on our website. We'll get back to you within a few hours to confirm your booking.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" onclick="toggleAcc(this)">
            <span>Do you offer outstation trips from Calicut?</span>
            <span className="acc-icon"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="accordion-body">
            <p>Yes! We offer outstation taxi services from Calicut (Kozhikode) to all major destinations across Kerala and other South Indian states including Coimbatore, Ooty, Mysore, and more.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" onclick="toggleAcc(this)">
            <span>What types of vehicles do you have?</span>
            <span className="acc-icon"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="accordion-body">
            <p>We maintain a fleet that includes sedans, MUVs/SUVs, 9-seater and 12-seater travellers, and larger buses for group travel. All vehicles are well-maintained and air-conditioned.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" onclick="toggleAcc(this)">
            <span>Are your tour packages customizable?</span>
            <span className="acc-icon"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="accordion-body">
            <p>Absolutely. Every tour package we offer can be customized to match your specific destinations, group size, travel dates, and budget. Just contact us with your requirements.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" onclick="toggleAcc(this)">
            <span>Do you provide airport pickup and drop services?</span>
            <span className="acc-icon"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="accordion-body">
            <p>Yes, we provide 24/7 airport pickup and drop services at Calicut International Airport and other major airports in Kerala. We track your flight to ensure on-time pickup.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </main>
  );
}
