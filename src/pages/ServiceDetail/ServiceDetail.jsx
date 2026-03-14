import { useParams, useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Banner from '../../components/Banner/Banner';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import services from '../../data/services.json';
import './ServiceDetail.css';

function ServiceDetail() {
  useScrollAnimation();
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="service-detail-error">
        <div className="error-container">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/services')} className="back-button">
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const bannerSlides = [
    {
      image: service.image,
      title: service.title,
      subtitle: service.fullContent
    },
    {
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Results You Can Count On',
      subtitle: 'Proven strategies that deliver measurable outcomes for your business'
    },
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Expert Team Ready',
      subtitle: 'Let us handle your digital marketing needs with expertise and dedication'
    }
  ];

  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="service-detail-page">
      <Banner slides={bannerSlides} />

      <section className="service-detail-section">
        <div className="container">
          <div className="service-detail-header animate-on-scroll fade-in-up">
            <h1>{service.title}</h1>
            <p className="service-detail-intro">{service.fullContent}</p>
          </div>

          <div className="service-detail-content">
            <div className="detail-image-container animate-on-scroll fade-in-left">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="detail-info animate-on-scroll fade-in-right">
              <div className="info-section">
                <h2>What We Offer</h2>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h2>Key Benefits</h2>
                <ul className="benefits-list">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-icon">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="cta-container animate-on-scroll fade-in-up">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how {service.title} can benefit your business.</p>
            <a href="/contact" className="cta-button-detail">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="related-services gray-bg">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Other Services We Offer</h2>
          <div className="related-services-grid">
            {otherServices.map((relatedService, index) => (
              <div key={relatedService.id} className={`animate-on-scroll fade-in-up stagger-${(index % 3) + 1}`}>
                <ServiceCard service={relatedService} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
