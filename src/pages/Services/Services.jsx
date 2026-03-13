import Banner from '../../components/Banner/Banner';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import services from '../../data/services.json';
import './Services.css';

function Services() {
  useScrollAnimation();

  const bannerSlides = [
    {
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Our Services',
      subtitle: 'Comprehensive digital marketing solutions tailored to your business needs'
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'SEO & Content Strategy',
      subtitle: 'Dominate search rankings and engage your audience with compelling content'
    },
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Digital Advertising',
      subtitle: 'Maximize ROI with targeted campaigns across all major platforms'
    }
  ];

  return (
    <div className="services-page">
      <Banner slides={bannerSlides} />

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className={`animate-on-scroll fade-in-up stagger-${(index % 3) + 1}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section gray-bg">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">How We Work</h2>
          <div className="process-grid">
            <div className="process-step animate-on-scroll scale-in stagger-1">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We learn about your business, goals, and target audience to create a customized strategy.</p>
            </div>
            <div className="process-step animate-on-scroll scale-in stagger-2">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>We develop a comprehensive digital marketing plan tailored to achieve your objectives.</p>
            </div>
            <div className="process-step animate-on-scroll scale-in stagger-3">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Our expert team implements the strategy with precision and creative excellence.</p>
            </div>
            <div className="process-step animate-on-scroll scale-in stagger-4">
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
