import Hero from '../../components/Hero/Hero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import team from '../../data/team.json';
import './About.css';

function About() {
  useScrollAnimation();

  return (
    <div className="about">
      <Hero
        title="About Us"
        subtitle="We're a team of passionate digital marketers dedicated to helping businesses succeed online"
      />

      <section className="about-section">
        <div className="container">
          <div className="about-content animate-on-scroll fade-in-up">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, our agency has grown from a small team of digital enthusiasts
              to a full-service digital marketing powerhouse. We've helped hundreds of businesses
              achieve their online marketing goals through innovative strategies and creative excellence.
            </p>
            <p>
              Our mission is simple: to deliver measurable results that drive real business growth.
              We believe in transparency, data-driven decisions, and building long-term partnerships
              with our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section gray-bg">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.id} className={`team-card animate-on-scroll scale-in stagger-${(index % 3) + 1}`}>
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card animate-on-scroll fade-in-up stagger-1">
              <h3>Data-Driven</h3>
              <p>Every decision we make is backed by data and analytics to ensure optimal results.</p>
            </div>
            <div className="value-card animate-on-scroll fade-in-up stagger-2">
              <h3>Transparent</h3>
              <p>We provide clear, honest reporting so you always know how your campaigns are performing.</p>
            </div>
            <div className="value-card animate-on-scroll fade-in-up stagger-3">
              <h3>Creative</h3>
              <p>We combine analytical thinking with creative excellence to make your brand stand out.</p>
            </div>
            <div className="value-card animate-on-scroll fade-in-up stagger-4">
              <h3>Results-Focused</h3>
              <p>We're committed to delivering measurable ROI and helping your business grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
