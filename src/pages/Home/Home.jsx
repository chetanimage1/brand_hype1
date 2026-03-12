import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import services from '../../data/services.json';
import portfolio from '../../data/portfolio.json';
import testimonials from '../../data/testimonials.json';
import clients from '../../data/clients.json';
import './Home.css';

function Home() {
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
          <h2 className="section-title">Trusted By Leading Brands</h2>
          <div className="clients-grid">
            {clients.map(client => (
              <div key={client.id} className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital marketing solutions designed to boost your online presence and drive measurable results
          </p>
          <div className="services-grid">
            {services.slice(0, 6).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section gray-bg">
        <div className="container">
          <h2 className="section-title">Featured Success Stories</h2>
          <p className="section-subtitle">
            Real results for real businesses. See how we've helped our clients achieve remarkable growth
          </p>
          <div className="portfolio-grid">
            {portfolio.slice(0, 3).map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from businesses that have transformed their digital presence with brandhype
          </p>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Grow Your Business?</h2>
          <p className="cta-description">
            Let's create a customized digital marketing strategy that drives real results for your brand. Get started with a free consultation today.
          </p>
          <a href="/contact" className="cta-button">Start Your Journey</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
