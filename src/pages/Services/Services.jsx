import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import services from '../../data/services.json';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions tailored to your business needs"
      />

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="services-section gray-bg">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We learn about your business, goals, and target audience to create a customized strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>We develop a comprehensive digital marketing plan tailored to achieve your objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Our expert team implements the strategy with precision and creative excellence.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>We continuously monitor, analyze, and optimize campaigns for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
