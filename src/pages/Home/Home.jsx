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
        title="Transform Your Business with Digital Marketing"
        subtitle="We help brands grow through data-driven strategies and creative excellence"
        ctaText="Get Started"
        ctaLink="/contact"
      />

      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.slice(0, 6).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section gray-bg">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="portfolio-grid">
            {portfolio.slice(0, 3).map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section gray-bg">
        <div className="container">
          <h2 className="section-title">Trusted By</h2>
          <div className="clients-grid">
            {clients.map(client => (
              <div key={client.id} className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
