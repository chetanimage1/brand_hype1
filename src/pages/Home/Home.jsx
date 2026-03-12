import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import services from '../../data/services.json';
import portfolio from '../../data/portfolio.json';
import testimonials from '../../data/testimonials.json';
import clients from '../../data/clients.json';
import './Home.css';

function Home() {
  useScrollAnimation();

  return (
    <div className="home">
      <Hero
        title="Elevate Your Brand with brandhype"
        subtitle="Data-driven digital marketing strategies that transform businesses and accelerate growth"
        ctaText="Get Started Today"
        ctaLink="/contact"
      />

      <section className="home-section clients-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Trusted By Leading Brands</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={client.id} className={`client-logo animate-on-scroll scale-in stagger-${(index % 6) + 1}`}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Our Services</h2>
          <p className="section-subtitle animate-on-scroll fade-in-up stagger-1">
            Comprehensive digital marketing solutions designed to boost your online presence and drive measurable results
          </p>
          <div className="services-grid">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.id} className={`animate-on-scroll fade-in-up stagger-${(index % 3) + 1}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section gray-bg">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Featured Success Stories</h2>
          <p className="section-subtitle animate-on-scroll fade-in-up stagger-1">
            Real results for real businesses. See how we've helped our clients achieve remarkable growth
          </p>
          <div className="portfolio-grid">
            {portfolio.slice(0, 3).map((project, index) => (
              <div key={project.id} className={`animate-on-scroll scale-in stagger-${index + 1}`}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">What Our Clients Say</h2>
          <p className="section-subtitle animate-on-scroll fade-in-up stagger-1">
            Don't just take our word for it. Hear from businesses that have transformed their digital presence with brandhype
          </p>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={testimonial.id} className={`animate-on-scroll fade-in-up stagger-${index + 1}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title animate-on-scroll fade-in-up">Ready to Grow Your Business?</h2>
          <p className="cta-description animate-on-scroll fade-in-up stagger-1">
            Let's create a customized digital marketing strategy that drives real results for your brand. Get started with a free consultation today.
          </p>
          <a href="/contact" className="cta-button animate-on-scroll scale-in stagger-2">Start Your Journey</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
